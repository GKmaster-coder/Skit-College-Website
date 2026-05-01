import React from 'react';
import Gallery from '../components/shared/Gallery';
import PageBanner from '../components/shared/PageBanner';

const InfraGallery = () => {
    const galleryData = [
        { id: 1, category: 'Ground', src: '/college-Infra/gr-1.jpg', alt: 'Ground' },
        { id: 2, category: 'Ground', src: '/college-Infra/gr-2.jpg', alt: 'Ground' },
        { id: 3, category: 'Ground', src: '/college-Infra/gr-3.jpg', alt: 'Ground' },
        { id: 4, category: 'Ground', src: '/college-Infra/gr-4.jpg', alt: 'Ground' },
        { id: 5, category: 'Ground', src: '/college-Infra/gr-5.jpg', alt: 'Ground' },
        { id: 6, category: 'Ground', src: '/college-Infra/gr-6.jpg', alt: 'Ground' },
        { id: 7, category: 'Labs', src: '/college-Infra/lab-1.jpg', alt: 'Labs' },
        { id: 8, category: 'Labs', src: '/college-Infra/lab-2.jpg', alt: 'Labs' },
        { id: 9, category: 'Labs', src: '/college-Infra/lab-3.jpg', alt: 'Labs' },
        { id: 10, category: 'Labs', src: '/college-Infra/lab-4.jpg', alt: 'Labs' },
        { id: 11, category: 'Labs', src: '/college-Infra/lab-5.jpg', alt: 'Labs' },
        { id: 12, category: 'Labs', src: '/college-Infra/lab-6.jpg', alt: 'Labs' },
        { id: 13, category: 'Cafe', src: '/college-Infra/cafe-1.jpg', alt: 'Cafe' },
        { id: 14, category: 'Library', src: '/college-Infra/lib-1.jpg', alt: 'Library' },
        { id: 15, category: 'Library', src: '/college-Infra/lib-2.jpg', alt: 'Library' },
        { id: 16, category: 'Library', src: '/college-Infra/lib-3.jpg', alt: 'Library' },
        { id: 17, category: 'Library', src: '/college-Infra/lib-4.jpg', alt: 'Library' },
        { id: 18, category: 'Classroom', src: '/college-Infra/class-1.jpg', alt: 'Classroom' },
        { id: 19, category: 'Classroom', src: '/college-Infra/class-2.jpg', alt: 'Classroom' },
        { id: 20, category: 'Classroom', src: '/college-Infra/class-3.jpg', alt: 'Classroom' },
        { id: 21, category: 'Classroom', src: '/college-Infra/class-4.jpg', alt: 'Classroom' },
        { id: 22, category: 'Classroom', src: '/college-Infra/class-5.jpg', alt: 'Classroom' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <PageBanner
                title="Infrastructure Gallery"
                subtitle="Explore our campus facilities, modern infrastructure, and learning environment."
                breadcrumbCurrent="Infrastructure Gallery"
            />
            <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
                <Gallery items={galleryData} />
            </div>
        </div>
    );
};

export default InfraGallery;
