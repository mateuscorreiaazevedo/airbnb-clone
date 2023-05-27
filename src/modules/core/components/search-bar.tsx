import { Search } from 'lucide-react'
import React from 'react'

export function SearchBar () {
  return (
    <div className="w-[432px] shadow-md cursor-pointer transition-all shadow-zinc-100 hover:shadow-zinc-300 text-sm h-12 items-center justify-around flex border border-zinc-300 rounded-full font-semibold">
      <button className="pl-2">Qualquer lugar</button>
      <span className="w-px h-8 bg-zinc-400" />
      <button className="">Qualquer semana</button>
      <span className="w-px h-8 bg-zinc-400" />
      <button className="flex gap-6 items-center">
        <span className="text-zinc-400 font-light">Hóspedes?</span>
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-500">
          <Search className="w-3 h-3 text-white" />
        </span>
      </button>
    </div>
  )
}
