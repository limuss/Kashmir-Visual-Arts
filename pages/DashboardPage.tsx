
import React, { useState, useMemo } from 'react';
import { User, Artisan, Artwork } from '../types';
import { ART_FORMS } from '../constants';

interface DashboardPageProps {
  user: User;
  artisans: Artisan[];
  onUpdateArtisans: (list: Artisan[]) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user, artisans, onUpdateArtisans }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'review' | 'edit' | 'artworks'>('overview');
  const [successMsg, setSuccessMsg] = useState('');
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  // Find target artisan if role is artisan
  const myProfile = artisans.find(a => a.id === user.artisanId);
  
  // Artisan notification logic
  const notifications = useMemo(() => {
    if (!myProfile) return [];
    const logs = [];
    
    if (myProfile.pendingChanges) {
      logs.push({ type: 'pending', msg: 'Profile revisions are currently under registry audit.', date: 'Just now' });
    }
    if (myProfile.rejectionNote) {
      logs.push({ type: 'rejected', msg: 'Profile update was returned with curator feedback.', date: 'Today' });
    }
    
    myProfile.artworks.forEach(aw => {
      if (aw.status === 'pending') {
        logs.push({ type: 'pending', msg: `Artwork "${aw.title}" is awaiting verification.`, date: 'Recent' });
      } else if (aw.status === 'rejected') {
        logs.push({ type: 'rejected', msg: `Artwork "${aw.title}" was not approved for the live archive.`, date: 'Recent' });
      } else if (aw.status === 'live') {
        // Mocking an "approved" notification for the log
        logs.push({ type: 'approved', msg: `Artwork "${aw.title}" is now live in the heritage catalog.`, date: 'Recent' });
      }
    });

    return logs.sort((a, b) => (a.type === 'rejected' ? -1 : 1));
  }, [myProfile]);

  const pendingArtworksCount = myProfile?.artworks.filter(aw => aw.status === 'pending').length || 0;
  const hasRejectedArtworks = myProfile?.artworks.some(aw => aw.status === 'rejected') || false;
  const hasPendingProfile = !!myProfile?.pendingChanges;
  const hasRejectedProfile = !!myProfile?.rejectionNote;

  // Pending tasks for admin
  const pendingRequests = artisans.filter(a => 
    a.status === 'pending' || 
    a.pendingChanges || 
    a.artworks.some(aw => aw.status === 'pending')
  );

  const handleApproveProfile = (artisanId: string) => {
    const newList = artisans.map(a => {
      if (a.id === artisanId) {
        if (a.status === 'pending') return { ...a, status: 'live' as const, rejectionNote: undefined };
        if (a.pendingChanges) {
          const updated = { ...a, ...a.pendingChanges, pendingChanges: undefined, rejectionNote: undefined };
          return updated as Artisan;
        }
      }
      return a;
    });
    onUpdateArtisans(newList);
    setSuccessMsg('Profile changes approved.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleRejectProfile = (artisanId: string) => {
    if (!rejectionReason.trim()) return;

    const newList = artisans.map(a => {
      if (a.id === artisanId) {
        return { 
          ...a, 
          pendingChanges: undefined, 
          rejectionNote: rejectionReason,
          status: a.status === 'pending' ? 'suspended' : a.status 
        } as Artisan;
      }
      return a;
    });
    
    onUpdateArtisans(newList);
    setRejectingId(null);
    setRejectionReason('');
    setSuccessMsg('Profile changes rejected with reason.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleApproveArtwork = (artisanId: string, artworkId: string) => {
    const newList = artisans.map(a => {
      if (a.id === artisanId) {
        return {
          ...a,
          artworks: a.artworks.map(aw => aw.id === artworkId ? { ...aw, status: 'live' as const } : aw)
        };
      }
      return a;
    });
    onUpdateArtisans(newList);
    setSuccessMsg('Artwork approved and added to live gallery.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleRejectArtwork = (artisanId: string, artworkId: string) => {
    const newList = artisans.map(a => {
      if (a.id === artisanId) {
        return {
          ...a,
          artworks: a.artworks.map(aw => aw.id === artworkId ? { ...aw, status: 'rejected' as const } : aw)
        };
      }
      return a;
    });
    onUpdateArtisans(newList);
  };

  const handleArtisanSubmitEdits = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const edits = {
      bio: formData.get('bio') as string,
      location: formData.get('location') as string,
    };

    const newList = artisans.map(a => {
      if (a.id === user.artisanId) {
        return { ...a, pendingChanges: edits, rejectionNote: undefined };
      }
      return a;
    });
    onUpdateArtisans(newList);
    setSuccessMsg('Profile updates submitted for admin review.');
    setActiveTab('overview');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleAddArtwork = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newAW: Artwork = {
      id: `aw-${Date.now()}`,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&fit=crop', 
      status: 'pending'
    };

    const newList = artisans.map(a => {
      if (a.id === user.artisanId) {
        return { ...a, artworks: [...a.artworks, newAW] };
      }
      return a;
    });
    onUpdateArtisans(newList);
    setSuccessMsg('New artwork submitted for admin review.');
    setActiveTab('overview');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="bg-[#cab89d] min-h-screen py-10 px-4 md:px-20 max-w-[1440px] mx-auto">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-[#4B3827]/10 pb-8 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-playfair text-[#3E2D1F] mb-2 uppercase tracking-tight">
            {user.role === 'admin' ? 'Archive Registry' : 'Artisan Workspace'}
          </h1>
          <p className="font-lora italic text-[#5A4632]">
            Logged in as <span className="font-bold text-[#4B3827]">{user.name}</span> <span className="text-[10px] bg-[#3E2D1F] text-[#F5F1EA] px-2 py-0.5 ml-2 font-black uppercase tracking-widest">{user.role}</span>
          </p>
        </div>
        
        <div className="flex gap-2">
           <button 
             onClick={() => setActiveTab('overview')}
             className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${activeTab === 'overview' ? 'border-[#7B4A2E] text-[#7B4A2E]' : 'border-transparent text-[#8A7660] hover:text-[#4B3827]'}`}
           >
             Snapshot
           </button>
           {user.role === 'admin' ? (
              <button 
                onClick={() => setActiveTab('review')}
                className={`relative px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${activeTab === 'review' ? 'border-[#7B4A2E] text-[#7B4A2E]' : 'border-transparent text-[#8A7660] hover:text-[#4B3827]'}`}
              >
                Review Log
                {pendingRequests.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7B4A2E] text-white text-[9px] flex items-center justify-center rounded-full animate-pulse font-black">
                    {pendingRequests.length}
                  </span>
                )}
              </button>
           ) : (
              <>
                <button 
                  onClick={() => setActiveTab('edit')}
                  className={`relative px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${activeTab === 'edit' ? 'border-[#7B4A2E] text-[#7B4A2E]' : 'border-transparent text-[#8A7660] hover:text-[#4B3827]'}`}
                >
                  Edit Profile
                  {(hasPendingProfile || hasRejectedProfile) && (
                    <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border border-[#cab89d] flex items-center justify-center text-[8px] text-white font-black ${hasRejectedProfile ? 'bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'bg-amber-500 animate-pulse'}`}>
                      {hasRejectedProfile ? '!' : ''}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab('artworks')}
                  className={`relative px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${activeTab === 'artworks' ? 'border-[#7B4A2E] text-[#7B4A2E]' : 'border-transparent text-[#8A7660] hover:text-[#4B3827]'}`}
                >
                  Gallery
                  {(pendingArtworksCount > 0 || hasRejectedArtworks) && (
                    <span className={`absolute -top-1 -right-2 flex items-center justify-center min-w-[18px] h-[18px] rounded-full border border-[#cab89d] px-1 text-[8px] text-white font-black shadow-md ${hasRejectedArtworks ? 'bg-red-600' : 'bg-amber-600 animate-pulse'}`}>
                      {hasRejectedArtworks ? '!' : pendingArtworksCount}
                    </span>
                  )}
                </button>
              </>
           )}
        </div>
      </div>

      {successMsg && (
        <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 text-green-800 text-xs font-bold flex items-center gap-3 animate-fade-in shadow-sm">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
           {successMsg}
        </div>
      )}

      {/* --- ADMIN VIEW: REVIEW --- */}
      {user.role === 'admin' && activeTab === 'review' && (
        <section className="space-y-8 animate-fade-in">
           <h2 className="text-2xl font-playfair text-[#3E2D1F] border-l-4 border-[#7B4A2E] pl-4 mb-8 uppercase tracking-widest">Registry Task Queue</h2>
           {pendingRequests.length > 0 ? (
             <div className="grid grid-cols-1 gap-8">
                {pendingRequests.map(artisan => (
                  <div key={artisan.id} className="bg-[#F2E6D8] p-8 border border-[#D6C7B2] shadow-md flex flex-col gap-6 relative overflow-hidden group">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#D6C7B2] shrink-0">
                        <img src={artisan.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-2xl font-bold font-playfair text-[#3E2D1F]">{artisan.name}</h3>
                          <span className="text-[9px] bg-[#7B4A2E] text-white px-2 py-0.5 font-black uppercase tracking-[0.2em]">
                            {artisan.pendingChanges ? 'Profile Update' : artisan.status === 'pending' ? 'Verification' : 'Catalog Audit'}
                          </span>
                        </div>
                        <p className="text-sm font-lora italic text-[#5A4632] mb-6">Traditional practitioner of {artisan.role}</p>
                        
                        {(artisan.status === 'pending' || artisan.pendingChanges) && (
                          <div className="mb-8">
                            {artisan.pendingChanges && (
                              <div className="bg-white/40 p-5 border border-[#D6C7B2] mb-6 shadow-inner">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A7660] mb-3">Change Request Details:</p>
                                <ul className="text-xs space-y-3 font-lora">
                                    {Object.entries(artisan.pendingChanges).map(([key, val]) => (
                                      <li key={key} className="flex gap-2">
                                        <span className="font-bold text-[#3E2D1F] capitalize">{key}:</span>
                                        <span className="text-[#5A4632] leading-relaxed">{val as string}</span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            )}
                            
                            {rejectingId === artisan.id ? (
                               <div className="bg-[#E2D7C6] p-5 border border-[#7B4A2E]/30 animate-fade-in shadow-xl">
                                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#7B4A2E] mb-2">Reason for Rejection</label>
                                  <textarea 
                                    value={rejectionReason}
                                    onChange={(e) => setRejectionReason(e.target.value)}
                                    placeholder="Please provide guidance for the artisan..."
                                    className="w-full bg-white border border-[#D6C7B2] p-3 text-xs font-lora focus:outline-none focus:ring-1 focus:ring-[#7B4A2E] mb-4"
                                    rows={3}
                                  />
                                  <div className="flex gap-2">
                                    <button 
                                      onClick={() => handleRejectProfile(artisan.id)}
                                      className="bg-[#7B4A2E] text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#3E2D1F] transition-all"
                                    >
                                      Confirm Rejection
                                    </button>
                                    <button 
                                      onClick={() => { setRejectingId(null); setRejectionReason(''); }}
                                      className="text-[10px] font-bold uppercase tracking-widest text-[#3E2D1F] px-4"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                               </div>
                            ) : (
                               <div className="flex gap-3">
                                  <button 
                                    onClick={() => handleApproveProfile(artisan.id)}
                                    className="bg-[#3E2D1F] text-[#F5F1EA] px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-md active:scale-95"
                                  >
                                    Approve Changes
                                  </button>
                                  <button 
                                    onClick={() => setRejectingId(artisan.id)}
                                    className="border-2 border-[#7B4A2E] text-[#7B4A2E] px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#7B4A2E] hover:text-white transition-all active:scale-95"
                                  >
                                    Reject Changes
                                  </button>
                               </div>
                            )}
                          </div>
                        )}

                        {artisan.artworks.some(aw => aw.status === 'pending') && (
                          <div className="space-y-5 pt-8 border-t border-[#D6C7B2]/40">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A7660]">New Catalog Submissions:</p>
                            {artisan.artworks.filter(aw => aw.status === 'pending').map(aw => (
                              <div key={aw.id} className="bg-white/60 p-5 border border-[#D6C7B2] flex gap-6 items-center hover:bg-white transition-colors">
                                <img src={aw.image} className="w-20 h-20 object-cover border border-[#D6C7B2]" alt="" />
                                <div className="flex-grow">
                                  <h4 className="font-playfair font-bold text-lg text-[#3E2D1F]">{aw.title}</h4>
                                  <p className="text-xs font-lora text-[#5A4632]">{aw.price}</p>
                                </div>
                                <div className="flex gap-2">
                                  <button onClick={() => handleApproveArtwork(artisan.id, aw.id)} className="px-5 py-2 bg-green-800 text-white text-[9px] font-bold uppercase tracking-widest hover:bg-green-900 active:scale-95 transition-all">Approve</button>
                                  <button onClick={() => handleRejectArtwork(artisan.id, aw.id)} className="px-5 py-2 border border-[#7B4A2E] text-[#7B4A2E] text-[9px] font-bold uppercase tracking-widest hover:bg-[#7B4A2E] hover:text-white active:scale-95 transition-all">Reject</button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
           ) : (
             <div className="py-24 text-center border-2 border-dashed border-[#D6C7B2] bg-white/10">
                <p className="font-lora italic text-[#8A7660] text-lg">Your review queue is currently empty. The registry is up to date.</p>
             </div>
           )}
        </section>
      )}

      {/* --- ARTISAN VIEW: ARTWORKS --- */}
      {user.role === 'artisan' && activeTab === 'artworks' && myProfile && (
        <section className="animate-fade-in max-w-5xl">
           <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-playfair text-[#3E2D1F] border-l-4 border-[#7B4A2E] pl-4 uppercase tracking-widest">Digital Catalog</h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#F2E6D8] p-8 border border-[#D6C7B2] shadow-lg">
                <h3 className="text-xl font-playfair mb-8 text-[#3E2D1F]">Submit Heritage Work</h3>
                <form onSubmit={handleAddArtwork} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A7660] mb-2">Title of Artwork</label>
                    <input name="title" required className="w-full bg-white border border-[#D6C7B2] p-3 text-sm font-lora focus:outline-none focus:ring-1 focus:ring-[#7B4A2E]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A7660] mb-2">Curatorial Description</label>
                    <textarea name="description" required rows={3} className="w-full bg-white border border-[#D6C7B2] p-3 text-sm font-lora focus:outline-none focus:ring-1 focus:ring-[#7B4A2E]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A7660] mb-2">Estimated Value</label>
                    <input name="price" placeholder="e.g. ₹15,000" required className="w-full bg-white border border-[#D6C7B2] p-3 text-sm font-lora focus:outline-none focus:ring-1 focus:ring-[#7B4A2E]" />
                  </div>
                  <button type="submit" className="w-full bg-[#3E2D1F] text-[#F5F1EA] py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-md active:scale-[0.99]">Submit for Verification</button>
                </form>
              </div>

              <div className="space-y-5">
                <h3 className="text-xl font-playfair mb-6 text-[#3E2D1F]">Gallery Status</h3>
                {myProfile.artworks.length > 0 ? (
                  myProfile.artworks.map(aw => (
                    <div key={aw.id} className="bg-white/80 p-5 border border-[#D6C7B2] flex gap-6 items-center transition-all hover:bg-white relative group">
                       <img src={aw.image} className="w-20 h-20 object-cover border border-[#D6C7B2]" alt="" />
                       <div className="flex-grow">
                          <h4 className="font-playfair font-bold text-[#3E2D1F] mb-1">{aw.title}</h4>
                          <span className={`text-[8px] uppercase font-black tracking-[0.2em] px-3 py-1 rounded-full ${
                            aw.status === 'live' ? 'bg-green-100 text-green-800' :
                            aw.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {aw.status}
                          </span>
                       </div>
                       <p className="text-sm font-bold text-[#7B4A2E] font-lora">{aw.price}</p>
                       {aw.status === 'rejected' && (
                         <div className="absolute top-2 right-2 cursor-help">
                            <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-black shadow-lg">!</span>
                            <div className="absolute right-0 top-7 w-48 bg-[#3E2D1F] text-[#F5F1EA] text-[10px] p-3 rounded-sm shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0 leading-relaxed">
                               Rejected by curator. Please review heritage guidelines and resubmit with verified documentation.
                            </div>
                         </div>
                       )}
                    </div>
                  ))
                ) : (
                  <div className="p-10 text-center border-2 border-dashed border-[#D6C7B2] bg-[#F2E6D8]/20">
                    <p className="text-sm font-lora italic text-[#8A7660]">Your digital gallery is empty.</p>
                  </div>
                )}
              </div>
           </div>
        </section>
      )}

      {/* --- OVERVIEW TAB --- */}
      {activeTab === 'overview' && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in">
           <div className="lg:col-span-1">
              <div className="bg-[#4B3827] text-[#F5F1EA] p-10 shadow-2xl sticky top-28 border-t-4 border-[#7B4A2E]">
                 <div className="flex items-center gap-6 mb-10">
                    <div className="w-20 h-20 rounded-full bg-[#7B4A2E] flex items-center justify-center text-4xl font-playfair shadow-xl border border-white/10 ring-4 ring-[#4B3827]">
                       {user.name.charAt(0)}
                    </div>
                    <div>
                       <h3 className="text-2xl font-playfair leading-tight text-white">{user.name}</h3>
                       <p className="text-[10px] uppercase tracking-[0.25em] text-[#D6C7B2] font-black">{user.role}</p>
                    </div>
                 </div>
                 
                 <div className="space-y-8">
                    <div>
                       <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A7660] font-black mb-2">Member Since</p>
                       <p className="text-sm font-lora italic text-[#E2D7C6]">2024 Archive Launch</p>
                    </div>
                    <div>
                       <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A7660] font-black mb-2">Registry Tier</p>
                       <p className="text-sm font-lora text-[#E2D7C6]">{user.role === 'admin' ? 'Master Curator' : 'Heritage Practitioner'}</p>
                    </div>
                    {user.role === 'artisan' && myProfile && (
                      <div className="space-y-6">
                         <div>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A7660] font-black mb-2">Public Visibility</p>
                            <p className="text-sm flex items-center gap-3 text-[#E2D7C6]">
                              <span className={`w-2.5 h-2.5 rounded-full ring-2 ring-white/10 ${myProfile.status === 'live' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500 animate-pulse'}`}></span>
                              {myProfile.status === 'live' ? 'Live in Archive' : 'Awaiting Review'}
                            </p>
                         </div>
                         
                         {myProfile.rejectionNote && (
                            <div className="p-4 bg-red-900/40 border border-red-500/50 rounded-sm shadow-inner">
                               <p className="text-[9px] uppercase font-black tracking-widest text-red-300 mb-2 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                  Feedback from Curators
                               </p>
                               <p className="text-xs italic text-red-50 font-lora leading-relaxed">"{myProfile.rejectionNote}"</p>
                            </div>
                         )}
                         {myProfile.pendingChanges && (
                           <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded-sm">
                              <p className="text-[9px] uppercase font-black tracking-widest text-amber-300 mb-1 animate-pulse">Update in Progress</p>
                              <p className="text-[10px] text-amber-100 font-lora italic leading-tight">The board is currently auditing your latest archival revisions.</p>
                           </div>
                         )}
                      </div>
                    )}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-2 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-[#F2E6D8] p-8 shadow-md border-b-4 border-[#7B4A2E]">
                    <span className="text-[9px] uppercase font-black tracking-[0.2em] text-[#8A7660]">Masters Catalogued</span>
                    <p className="text-5xl font-playfair mt-3 text-[#3E2D1F]">{artisans.length}</p>
                 </div>
                 <div className="bg-[#F2E6D8] p-8 shadow-md border-b-4 border-[#4B3827]">
                    <span className="text-[9px] uppercase font-black tracking-[0.2em] text-[#8A7660]">Traditions Indexed</span>
                    <p className="text-5xl font-playfair mt-3 text-[#3E2D1F]">{ART_FORMS.length}</p>
                 </div>
                 <div className="bg-[#F2E6D8] p-8 shadow-md border-b-4 border-[#8A7660]">
                    <span className="text-[9px] uppercase font-black tracking-[0.2em] text-[#8A7660]">Moderation Queue</span>
                    <p className="text-5xl font-playfair mt-3 text-[#7B4A2E]">{pendingRequests.length}</p>
                 </div>
              </div>

              {/* --- NEW: ARCHIVAL ACTIVITY LOG FOR ARTISANS --- */}
              {user.role === 'artisan' && (
                <div className="bg-[#F2E6D8]/50 border border-[#D6C7B2] p-10 shadow-sm rounded-sm">
                  <h3 className="text-2xl font-playfair mb-8 text-[#3E2D1F] border-b border-[#4B3827]/10 pb-4">Archive Activity Log</h3>
                  {notifications.length > 0 ? (
                    <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                       {notifications.map((notif, i) => (
                         <div key={i} className={`flex items-start gap-5 p-4 rounded-sm border-l-4 transition-all hover:bg-white/40 ${
                           notif.type === 'rejected' ? 'border-red-600 bg-red-50/30' : 
                           notif.type === 'approved' ? 'border-green-700 bg-green-50/30' : 
                           'border-amber-500 bg-amber-50/30'
                         }`}>
                           <div className="shrink-0 mt-1">
                              {notif.type === 'rejected' && <span className="w-5 h-5 flex items-center justify-center bg-red-600 text-white rounded-full text-[10px] font-black">!</span>}
                              {notif.type === 'approved' && <span className="w-5 h-5 flex items-center justify-center bg-green-700 text-white rounded-full text-[10px] font-black">✓</span>}
                              {notif.type === 'pending' && <span className="w-5 h-5 flex items-center justify-center bg-amber-500 text-white rounded-full text-[10px] font-black">?</span>}
                           </div>
                           <div className="flex-grow">
                              <p className="text-sm font-lora text-[#3E2D1F] leading-relaxed">{notif.msg}</p>
                              <span className="text-[9px] uppercase font-black tracking-widest text-[#8A7660] mt-2 block opacity-70">{notif.date}</span>
                           </div>
                           <button 
                             onClick={() => notif.msg.includes('Artwork') ? setActiveTab('artworks') : setActiveTab('edit')}
                             className="text-[9px] uppercase font-black tracking-[0.1em] text-[#7B4A2E] hover:underline"
                           >
                              Review
                           </button>
                         </div>
                       ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                       <p className="text-sm font-lora italic text-[#8A7660]">No recent archival actions recorded.</p>
                    </div>
                  )}
                </div>
              )}

              <div className="bg-white/40 p-10 border border-[#D6C7B2] rounded-sm">
                 <h3 className="text-2xl font-playfair mb-8 text-[#3E2D1F]">Registry Performance</h3>
                 <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-[#4B3827]/10">
                       <span className="text-sm font-lora text-[#5A4632]">Asset Integrity Score</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-green-700">98.4% Optimal</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-[#4B3827]/10">
                       <span className="text-sm font-lora text-[#5A4632]">Verification Latency</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#7B4A2E]">~12 Hours</span>
                    </div>
                    <div className="flex justify-between items-center py-4">
                       <span className="text-sm font-lora text-[#5A4632]">Digital Storage Distribution</span>
                       <div className="w-1/3 h-1.5 bg-[#4B3827]/20 rounded-full overflow-hidden">
                          <div className="h-full bg-[#7B4A2E] w-[45%]" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* --- EDIT PROFILE VIEW --- */}
      {user.role === 'artisan' && activeTab === 'edit' && myProfile && (
        <section className="animate-fade-in max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-playfair text-[#3E2D1F] border-l-4 border-[#7B4A2E] pl-4 uppercase tracking-widest">Archive Identity</h2>
            {hasPendingProfile && (
              <span className="bg-amber-100 text-amber-800 text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full animate-pulse border border-amber-200">Pending Review</span>
            )}
          </div>
          
          {myProfile.rejectionNote && (
            <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 shadow-xl animate-fade-in">
               <div className="flex items-center gap-3 mb-2">
                 <span className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.4)]" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-red-600">Curator Feedback on Previous Attempt:</p>
               </div>
               <p className="text-sm italic text-[#3E2D1F] font-lora leading-relaxed">"{myProfile.rejectionNote}"</p>
            </div>
          )}

          <form onSubmit={handleArtisanSubmitEdits} className={`space-y-10 bg-[#F2E6D8] p-10 border border-[#D6C7B2] shadow-xl transition-all ${hasPendingProfile ? 'opacity-70 pointer-events-none filter grayscale-[0.3]' : 'opacity-100'}`}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A7660] mb-3">Workshop Region</label>
                  <input name="location" defaultValue={myProfile.location} className="w-full bg-white border border-[#D6C7B2] p-3 font-lora text-sm focus:outline-none focus:ring-1 focus:ring-[#7B4A2E] transition-shadow hover:shadow-inner" />
                </div>
                <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A7660] mb-3">Digital Identity Media</label>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-sm border border-dashed border-[#8A7660] flex items-center justify-center text-[#8A7660] hover:bg-white/50 transition-colors cursor-pointer">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                      </div>
                      <input type="file" className="text-[10px] text-[#5A4632] uppercase font-bold" />
                   </div>
                </div>
             </div>
             <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A7660] mb-3">Professional Statement / Heritage Bio</label>
                <textarea name="bio" defaultValue={myProfile.bio} rows={6} className="w-full bg-white border border-[#D6C7B2] p-4 font-lora text-sm focus:outline-none focus:ring-1 focus:ring-[#7B4A2E] leading-relaxed transition-shadow hover:shadow-inner" />
             </div>
             <button type="submit" className="bg-[#3E2D1F] text-[#F5F1EA] px-16 py-4 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-black hover:shadow-2xl transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
               {hasPendingProfile ? 'Revision Locked During Audit' : 'Dispatch for Registry Audit'}
             </button>
          </form>
          {hasPendingProfile && (
            <p className="mt-6 text-[10px] text-[#8A7660] italic text-center uppercase tracking-widest font-bold animate-pulse">Your profile is currently under active curatorial review.</p>
          )}
        </section>
      )}
    </div>
  );
};

export default DashboardPage;
