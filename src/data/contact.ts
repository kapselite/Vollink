export const phoneNumber = '263773732447';
export const phoneDisplay = '+263 773 732 447';
export const salesEmail = 'sales@vollink.co.zw';

export const whatsappLink = (message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
