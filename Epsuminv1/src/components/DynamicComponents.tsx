"use client";

import dynamic from 'next/dynamic';

const DynamicFloatingWhatsApp = dynamic(() => import('react-floating-whatsapp').then(mod => mod.FloatingWhatsApp), {
  ssr: false,
});

const DynamicTestimonios = dynamic(() => import('@/components/sections/home/Testimonios'), {
  loading: () => <div className="h-80 w-full bg-gray-100 animate-pulse rounded-md"></div>,
  ssr: false,
});



export function DynamicComponents({ phoneNumber }: { phoneNumber: string }) {
    return (
        <>
            <DynamicFloatingWhatsApp
                phoneNumber={phoneNumber}
                accountName="EPSUMIN"
                allowClickAway={false}
                notification={true}
                chatMessage="Hola, ¿en qué puedo ayudarte?"
                placeholder="Escribe un mensaje..."
                className="fixed bottom-4 right-4 z-50 text-black"
                avatar="/img/avatar.png"
            />
            <DynamicTestimonios />
        </>
    );
}