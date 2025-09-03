"use client"; 

import React, { useEffect, useState } from 'react';

export const MonedasDeCambio = () => {
  const [uf, setUf] = useState<number | null>(null);
  const [dolar, setDolar] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://mindicador.cl/api')
      .then(res => res.json())
      .then(data => {
        setUf(data.uf.valor);
        setDolar(data.dolar.valor);
      })
      .catch(err => console.error('Error al obtener valores:', err));
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Monedas de Cambio</h3>
      <ul className="space-y-3">
        <li className="mb-5">
          <span>Valor UF: {uf ? `$${uf.toLocaleString('es-CL', { minimumFractionDigits: 2 })}` : 'Cargando...'}</span>
        </li>
        <li className="mb-5">
          <span>Dólar: {dolar ? `$${dolar.toLocaleString('es-CL', { minimumFractionDigits: 2 })}` : 'Cargando...'}</span>
        </li>
      </ul>
    </div>
  );
};