export interface Service {
  id: string;
  webhook: string;
  description: string;
  placeholder: string;
}

export const services: Service[] = [
  {
    id: 'dreams',
    webhook: import.meta.env.VITE_N8N_WEBHOOK_DREAMS || '',
    description: 'Раскройте тайны своих снов. Наш ИИ поможет вам понять их значение.',
    placeholder: 'Мне приснилось, что я летаю над городом...'
  },
  {
    id: 'what-to-wear',
    webhook: import.meta.env.VITE_N8N_WEBHOOK_WHAT_TO_WEAR || '',
    description: 'Получите совет по стилю, основанный на погоде и поводе.',
    placeholder: 'Подскажи, что надеть на деловую встречу в дождливую погоду.'
  }
];
