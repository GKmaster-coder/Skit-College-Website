import React from 'react';
import Gallery from '../components/shared/Gallery';
import PageBanner from '../components/shared/PageBanner';

const EventGallery = () => {
    const galleryData = [
        { id: 1, category: 'Annual Fest', src: 'https://images.unsplash.com/photo-1541339907198-e08756defe93', alt: 'Annual College Fest Celebration' },
        { id: 2, category: 'Cultural Event', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94', alt: 'Cultural Dance Performance' },
        { id: 3, category: 'Seminar', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', alt: 'Technical Seminar Session' },
        { id: 4, category: 'Workshop', src: 'https://images.unsplash.com/photo-1562774053-701939374585', alt: 'Student Workshop Activity' },
        { id: 5, category: 'Sports', src: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62', alt: 'College Sports Event' },
        { id: 6, category: 'Conference', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865', alt: 'Academic Conference आयोजन' },
        { id: 7, category: 'Celebration', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678', alt: 'Campus Celebration Event' },
        { id: 8, category: 'Guest Lecture', src: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0', alt: 'Guest Lecture Session' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <PageBanner
                title="Event Gallery"
                subtitle="Explore memorable moments from our college events, fests, seminars, and celebrations."
                breadcrumbCurrent="Event Gallery"
            />

            <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
                <Gallery items={galleryData} />
            </div>
        </div>
    );
};

export default EventGallery;