import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const specialties = [
  "Reformas Integrales", 
  "Pintura y Acabados", 
  "Obra Nueva / Albañilería", 
  "Durlock y Tabiquería", 
  "Construcción Llave en Mano"
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', specialty: specialties[0], message: '' });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "5493541456789"; 
    const text = `*SOLICITUD DE PRESUPUESTO - OBRA*\n` +
                 `*--------------------------*\n` +
                 `*Interesado:* ${form.name}\n` +
                 `*Especialidad:* ${form.specialty}\n` +
                 `*Proyecto:* ${form.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form 
      onSubmit={handleWhatsApp} 
      className="relative z-10 space-y-6 text-left max-w-2xl mx-auto bg-secondary p-5 md:p-10 border-t-4 border-primary rounded-sm"
    >
      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Propietario / Cliente</label>
          <input 
            required
            type="text" 
            placeholder="Su nombre"
            onChange={(e) => setForm({...form, name: e.target.value})}
            className="w-full p-3 md:p-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary outline-none transition-all text-sm font-body"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Rubro de Obra</label>
          <div className="relative">
            <select 
              onChange={(e) => setForm({...form, specialty: e.target.value})}
              className="w-full p-3 md:p-4 bg-white/5 border border-white/10 text-white focus:border-primary outline-none transition-all text-sm font-body appearance-none cursor-pointer pr-10"
            >
              {specialties.map(s => <option key={s} value={s} className="bg-secondary text-white">{s}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Detalle del Proyecto</label>
        <textarea 
          required
          rows={3}
          placeholder="M2, materiales, tiempos..."
          onChange={(e) => setForm({...form, message: e.target.value})}
          className="w-full p-3 md:p-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary outline-none transition-all text-sm font-body resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white py-4 font-title text-xl md:text-2xl tracking-[0.05em] uppercase transition-all active:scale-[0.98]"
      >
        SOLICITAR PRESUPUESTO
      </button>

      <div className="text-center opacity-30">
         <p className="text-[9px] text-white uppercase tracking-[0.2em]">
            Presupuestos oficiales bajo norma TodoNerds
         </p>
      </div>
    </form>
  );
}