"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  MonitorPlay, 
  BrainCircuit, 
  Sigma, 
  Zap, 
  Database,
  Scale,
  Grid3x3,
  Timer,
  Maximize, // Import ikon Maximize
  Minimize  // Import ikon Minimize
} from "lucide-react";

// --- DATA SLIDE ---
const slides = [
  // 1. COVER
  {
    id: "cover",
    title: "ANALISIS ALGORITMA FLOOD FILL",
    subtitle: "Perbandingan Kompleksitas Waktu Dengan Pendekatan Rekursif (DFS) vs Iteratif (BFS)",
    content: (
      <div className="text-center space-y-8">
        <div className="flex flex-col md:flex-row justify-center gap-8 text-xl font-mono text-emerald-400">
          <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            <p className="font-bold text-white">Rahmatul Akbar Alim</p>
            <p className="opacity-70">103012400172</p>
          </div>
          <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            <p className="font-bold text-white">Hamam Nashiruddin</p>
            <p className="opacity-70">103012400118</p>
          </div>
        </div>
        <p className="text-gray-400 mt-4 tracking-widest uppercase text-sm">Telkom University</p>
      </div>
    ),
    theme: "from-slate-900 to-slate-800",
  },

  // 2. LATAR BELAKANG
  {
    id: "latar-belakang",
    title: "LATAR BELAKANG",
    subtitle: "Urgensi Analisis Efisiensi",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center text-left max-w-5xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
              <Database size={20}/> Apa itu Flood Fill?
            </h3>
            <div className="p-4 bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "Flood fill is an algorithm that determines the area connected to a given node in a multi-dimensional array".
              </p>
              <p className="text-xs text-blue-300 mt-2 font-mono">
                — International Journal of Mechanical Engineering and Robotics Research (2017)
              </p>
            </div>
          </div>

          <div className="p-5 bg-red-500/10 rounded-xl border border-red-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <AlertTriangle size={60} />
            </div>
            <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
              <AlertTriangle size={18}/> Permasalahan Utama
            </h3>
            <p className="text-gray-300 text-sm">
              Implementasi sederhana menggunakan <strong>Rekursif (DFS)</strong> rentan gagal pada citra/grid beresolusi tinggi. Tumpukan pemanggilan fungsi dapat memenuhi memori sistem, menyebabkan <span className="text-red-300 font-bold">Stack Overflow (Crash)</span>.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>

           <div className="grid grid-cols-5 gap-1.5 w-48 h-48 z-10">
             {[...Array(25)].map((_, i) => (
               <motion.div 
                 key={i} 
                 initial={{ backgroundColor: "#1e293b", scale: 0.8 }}
                 animate={{ 
                    backgroundColor: [12, 7, 11, 13, 17, 6, 8, 16, 18].includes(i) ? "#3b82f6" : "#1e293b",
                    scale: [12, 7, 11, 13, 17].includes(i) ? 1.1 : 1
                 }}
                 transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: i * 0.05 
                 }}
                 className="rounded-md shadow-lg border border-white/5"
               />
             ))}
           </div>
           
           <div className="text-center z-10">
             <p className="text-sm font-bold text-white">Simulasi Penyebaran</p>
             <p className="text-xs text-gray-500 mt-1">Area terhubung diwarnai secara bertahap</p>
           </div>
        </div>
      </div>
    ),
    theme: "from-slate-900 to-blue-950",
  },

  // 3. BATASAN MASALAH
  {
    id: "batasan-masalah",
    title: "BATASAN MASALAH",
    subtitle: "Lingkup Penelitian",
    content: (
      <div className="space-y-4 max-w-3xl mx-auto text-left">
        <ul className="space-y-4 text-lg">
          <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
            <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400"><BrainCircuit size={24} /></div>
            <div>
              <strong className="block text-emerald-300">Fokus Analisis</strong>
              <span className="text-gray-300 text-base">Hanya membandingkan Kompleksitas Waktu dan sedikit penjelasan ruang.</span>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
            <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400"><CheckCircle size={24} /></div>
            <div>
              <strong className="block text-emerald-300">Matriks 4 Arah</strong>
              <span className="text-gray-300 text-base">Algoritma diuji pada Grid 2D dengan pergerakan Atas, Bawah, Kiri, Kanan (4-connected).</span>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
            <div className="bg-yellow-500/20 p-2 rounded-lg text-yellow-400"><Scale size={24} /></div>
            <div>
              <strong className="block text-yellow-300">Validitas Environment</strong>
              <span className="text-gray-300 text-base">Latency browser diabaikan karena overhead JavaScript berlaku adil untuk kedua algoritma.</span>
            </div>
          </li>
        </ul>
      </div>
    ),
    theme: "from-slate-900 to-emerald-950",
  },

  // 4. LANDASAN TEORI 1 (Definisi)
  {
    id: "teori-1",
    title: "LANDASAN TEORI",
    subtitle: "Rekursif vs Iteratif",
    content: (
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-purple-900/20 p-8 rounded-3xl border border-purple-500/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Database size={100} /></div>
          <h3 className="text-2xl font-bold text-purple-400 mb-4">REKURSIF (DFS)</h3>
          <p className="text-gray-300 mb-4">
            Menggunakan prinsip <strong>Depth-First Search</strong>. Fungsi memanggil dirinya sendiri untuk mengunjungi piksel tetangga sedalam mungkin sebelum kembali (backtracking).
          </p>
          <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs font-mono text-purple-300">Memory: System Call Stack</div>
        </div>

        <div className="bg-cyan-900/20 p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Database size={100} /></div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">ITERATIF (BFS)</h3>
          <p className="text-gray-300 mb-4">
            Menggunakan prinsip <strong>Breadth-First Search</strong>. Menggunakan struktur data <strong>Queue</strong> (Antrian) untuk mengunjungi piksel melebar secara bertahap (layer-by-layer).
          </p>
          <div className="inline-block px-3 py-1 bg-cyan-500/20 rounded-full text-xs font-mono text-cyan-300">Memory: Heap (RAM)</div>
        </div>
      </div>
    ),
    theme: "from-gray-900 to-purple-950",
  },

  // 5. LANDASAN TEORI 2 (Pros Cons)
  {
    id: "teori-2",
    title: "KELEBIHAN & KEKURANGAN",
    subtitle: "Perbandingan Karakteristik",
    content: (
      <div className="w-full max-w-4xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/20 text-gray-400">
              <th className="py-4 px-4 w-1/3">Aspek</th>
              <th className="py-4 px-4 text-purple-400">Rekursif (DFS)</th>
              <th className="py-4 px-4 text-cyan-400">Iteratif (BFS)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-sm md:text-base">
            <tr>
              <td className="py-4 px-4 font-bold text-white align-middle">Implementasi Kode</td>
              <td className="py-4 px-4 align-middle">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={18}/> <span>Pendek & Sederhana</span>
                </div>
              </td>
              <td className="py-4 px-4 align-middle">
                <div className="flex items-center gap-2 text-yellow-400">
                  <AlertTriangle size={18}/> <span>Lebih Panjang</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 font-bold text-white align-middle">Penggunaan Memori</td>
              <td className="py-4 px-4 align-middle">
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={18}/> <span>Stack (Terbatas)</span>
                </div>
              </td>
              <td className="py-4 px-4 align-middle">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={18}/> <span>Heap (Luas)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 font-bold text-white align-middle">Risiko Error</td>
              <td className="py-4 px-4 text-red-400 font-bold align-middle">Stack Overflow (Crash)</td>
              <td className="py-4 px-4 text-green-400 align-middle">Stabil (Robust)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    theme: "from-gray-900 to-slate-800",
  },

  // 6. LANDASAN TEORI 3 (Asimtotik)
  {
    id: "teori-3",
    title: "KOMPLEKSITAS ASIMTOTIK",
    subtitle: "Analisis Big-O",
    content: (
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-4">
           <div className="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
             <h3 className="text-gray-400 mb-2">Time Complexity</h3>
             <div className="text-5xl font-black text-emerald-400 font-mono">O(N)</div>
             <p className="text-sm text-gray-500 mt-2">Keduanya Linear (N = Total Piksel)</p>
           </div>
           <div className="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
             <h3 className="text-gray-400 mb-2">Space Complexity</h3>
             <div className="text-5xl font-black text-blue-400 font-mono">O(N)</div>
             <p className="text-sm text-gray-500 mt-2">Linear terhadap jumlah piksel</p>
           </div>
        </div>
        
        <div className="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20">
          <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2"><Zap size={20}/> Perbedaan Kunci</h4>
          <p className="text-gray-300">
            Meskipun sama-sama <strong>O(N)</strong>, Rekursif menyimpan state di <span className="text-red-400 font-bold">Stack</span> (MB), sedangkan Iteratif menyimpan di <span className="text-green-400 font-bold">Heap/RAM</span> (GB). 
            Ini yang membuat Rekursif rentan crash.
          </p>
        </div>
      </div>
    ),
    theme: "from-slate-900 to-emerald-950",
  },

  // 7. ANALISIS TEORITIS
  {
    id: "analisis",
    title: "ANALISIS TEORITIS",
    subtitle: "Bedah Pseudocode & Rumus",
    content: (
      <div className="grid md:grid-cols-2 gap-8 text-left w-full max-w-[90%]">
        {/* Rekursif Analysis */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/20 rounded text-purple-400"><Sigma size={24}/></div>
            <h3 className="text-xl font-bold text-purple-300">Rekursif (DFS)</h3>
          </div>
          
          <div className="bg-slate-950 p-3 rounded-lg border border-white/10 font-mono text-xs text-gray-300 mb-4 overflow-x-auto">
            <pre>{`procedure recursiveStack(in/out grid[ROWS][COLS] : integer, in r, c : integer)
  algoritma
      if (r < 0) OR (r >= ROWS) OR (c < 0) OR (c >= COLS) OR (grid[r][c] != TARGET_COLOR) then
        return
      endif
      grid[r][c] = FILL_COLOR
      recursiveStack(grid, r + 1, c)
      recursiveStack(grid, r - 1, c)
      recursiveStack(grid, r, c + 1)
      recursiveStack(grid, r, c - 1)
endprocedure
`}
            </pre>
          </div>

          <div className="p-3 bg-black/40 rounded-xl font-mono text-lg border-l-4 border-purple-500 text-purple-200 text-center">
            T(N) ≈ 8N
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm">
            <p className="font-bold text-gray-400 border-b border-gray-700 pb-2 mb-2 text-xs uppercase tracking-wider">Rincian Operasi per Piksel (N)</p>
            <ul className="space-y-2 font-mono text-xs md:text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Cek Validasi (Base Case)</span>
                <span className="text-purple-400">3 Ops</span>
              </li>
              <li className="flex justify-between">
                <span>Pewarnaan (Assignment)</span>
                <span className="text-purple-400">1 Op</span>
              </li>
              <li className="flex justify-between">
                <span>Pemanggilan Fungsi (4 Arah)</span>
                <span className="text-purple-400">4 Ops</span>
              </li>
              <li className="border-t border-gray-600 pt-2 mt-1 flex justify-between font-bold text-white">
                <span>TOTAL</span>
                <span className="text-purple-300">8 Operasi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Iteratif Analysis */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-500/20 rounded text-cyan-400"><Sigma size={24}/></div>
            <h3 className="text-xl font-bold text-cyan-300">Iteratif (BFS)</h3>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-white/10 font-mono text-xs text-gray-300 mb-4 overflow-x-auto">
            <pre>{`procedure iterativeQueue(in/out grid[ROWS][COLS] : integer, in startR, startC : integer)
  algoritma
    if (grid[startR][startC] NOT TARGET_COLOR) then
      return
    endif
    Q = createQueue()
    enqueue(Q, startR, startC)
    grid[startR][startC] = FILL_COLOR
    dr = [1, -1, 0, 0]; dc = [0, 0, 1, -1]
    while (NOT isQueueEmpty(Q)) do
      current = dequeue(Q)
        r = current.r; c = current.c
        for i = 0 to 3 do
          nr = r + dr[i]; nc = c + dc[i]
          if ((nr >= 0) AND (nr < ROWS) AND (nc >= 0) AND (nc < COLS) AND (grid[nr][nc] == TARGET_COLOR)) then
            grid[nr][nc] = FILL_COLOR
            enqueue(Q, nr, nc)
          endif
        endfor
    endwhile
endprocedure`}
            </pre>
          </div>

          <div className="p-3 bg-black/40 rounded-xl font-mono text-lg border-l-4 border-cyan-500 text-cyan-200 text-center">
            T(N) ≈ 26N + 5
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm">
            <p className="font-bold text-gray-400 border-b border-gray-700 pb-2 mb-2 text-xs uppercase tracking-wider">Rincian Operasi per Piksel (N)</p>
            <ul className="space-y-2 font-mono text-xs md:text-sm text-gray-300">
              <li className="flex justify-between opacity-70">
                <span>Inisialisasi Awal (Konstanta)</span>
                <span className="text-cyan-400">+5 Ops</span>
              </li>
              <li className="flex justify-between">
                <span>Persiapan (Dequeue & Var)</span>
                <span className="text-cyan-400">4 Ops</span>
              </li>
              <li className="flex justify-between">
                <span>Cek 4 Tetangga (4 x 5 Cek)</span>
                <span className="text-cyan-400">20 Ops</span>
              </li>
              <li className="flex justify-between">
                <span>Aksi (Color & Enqueue)</span>
                <span className="text-cyan-400">2 Ops</span>
              </li>
              <li className="border-t border-gray-600 pt-2 mt-1 flex justify-between font-bold text-white">
                <span>TOTAL</span>
                <span className="text-cyan-300">26N + 5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    theme: "from-slate-900 to-indigo-950",
  },

  // 8. SKENARIO PENGUJIAN
  {
    id: "skenario",
    title: "SKENARIO PENGUJIAN",
    subtitle: "Rancangan Eksperimen (Best vs Worst)",
    content: (
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl text-left">
        {/* BEST CASE */}
        <div className="bg-emerald-500/10 p-8 rounded-3xl border border-emerald-500/20 flex flex-col gap-4 relative overflow-hidden group hover:bg-emerald-500/15 transition-colors">
          <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Grid3x3 size={24} />
             </div>
             <div>
                <h3 className="text-xl font-bold text-white">BEST CASE</h3>
                <p className="text-emerald-400 text-sm">Small Scale Test</p>
             </div>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm flex-grow">
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span>Ukuran Grid</span>
               <span className="font-mono text-white font-bold">50 x 50</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span>Kondisi</span>
               <span>Grid Kosong (Tanpa Obstacle)</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span>Metode</span>
               <span className="flex items-center gap-1"><Timer size={14}/> Rata-rata 5 Percobaan</span>
             </div>
          </div>

          <div className="mt-4 bg-black/30 p-4 rounded-xl border border-emerald-500/20">
             <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">HIPOTESIS</p>
             <p className="text-emerald-300 font-medium">
               "Waktu eksekusi kedua algoritma <span className="text-white font-bold">tidak jauh berbeda (setara)</span>."
             </p>
          </div>
        </div>

        {/* WORST CASE */}
        <div className="bg-red-500/10 p-8 rounded-3xl border border-red-500/20 flex flex-col gap-4 relative overflow-hidden group hover:bg-red-500/15 transition-colors">
          <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                <AlertTriangle size={24} />
             </div>
             <div>
                <h3 className="text-xl font-bold text-white">WORST CASE</h3>
                <p className="text-red-400 text-sm">Stress Test</p>
             </div>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm flex-grow">
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span>Ukuran Grid</span>
               <span className="font-mono text-white font-bold">250 x 250</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span>Kondisi</span>
               <span>Grid Kosong (Tanpa Obstacle)</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span>Metode</span>
               <span className="flex items-center gap-1"><Timer size={14}/> Rata-rata 5 Percobaan</span>
             </div>
          </div>

          <div className="mt-4 bg-black/30 p-4 rounded-xl border border-red-500/20">
             <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">HIPOTESIS</p>
             <p className="text-red-300 font-medium">
               "Terjadi perbedaan signifikan. Rekursif berpotensi <span className="text-white font-bold bg-red-600/60 px-1 rounded animate-pulse">STACK OVERFLOW</span>."
             </p>
          </div>
        </div>
      </div>
    ),
    theme: "from-slate-900 to-red-950",
  },

  // 9. LIVE DEMO
  {
    id: "demo",
    title: "LIVE DEMONSTRASI",
    subtitle: "Pembuktian Langsung",
    content: (
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-40 animate-pulse"></div>
          <a 
            href="https://tubes-aka-six.vercel.app/" // GANTI KE ROUTE UTAMA
            target="_blank"
            className="relative group px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full text-2xl border border-emerald-500/50 flex items-center gap-4 transition-all hover:scale-105"
          >
            <MonitorPlay className="w-8 h-8 text-emerald-400" />
            REDIRECT
            <ExternalLink className="w-6 h-6 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <p className="text-gray-400 max-w-md text-sm">
          Ketika diklik maka akan me-Redirect ke aplikasi Flood Fill Complexity Analysis
        </p>
      </div>
    ),
    theme: "from-emerald-950 to-slate-900",
  },

  // 10. PENUTUP
  {
    id: "closing",
    title: "KESIMPULAN",
    subtitle: "Teori vs Realita",
    content: (
      <div className="text-center space-y-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-400 mb-2 flex items-center gap-2">
              <Sigma size={20}/> Secara Teoritis
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Rekursif lebih efisien</strong> karena memiliki konstanta operasi yang lebih kecil (<span className="text-white font-mono">8N</span>) dibandingkan Iteratif (<span className="text-white font-mono">26N</span>). Instruksinya lebih ringkas.
            </p>
          </div>

          <div className="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/30">
            <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <Database size={20}/> Secara Praktis
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Namun pada data besar, <strong>Iteratif menang mutlak</strong>. Rekursif dibatasi oleh kapasitas <em>Stack</em> yang kecil (rentan Crash), sedangkan Iteratif memanfaatkan luasnya <em>Heap Memory</em> (RAM).
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl border border-white/10 shadow-2xl">
          <p className="text-xl md:text-2xl font-light text-white">
            "Gunakan <span className="text-purple-400 font-bold">Rekursif</span> untuk kemudahan koding pada data kecil. <br/>
            Gunakan <span className="text-cyan-400 font-bold">Iteratif</span> untuk performa & stabilitas skala besar."
          </p>
        </div>

        <div className="pt-4 text-gray-500 text-sm">
          Terima Kasih
        </div>
      </div>
    ),
    theme: "from-slate-900 to-blue-950",
  },
];

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Navigasi Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  // Handle Fullscreen Change (Misal user tekan Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  const prevSlide = () => setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

  // Fungsi Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className={`h-screen w-full overflow-hidden bg-gradient-to-br ${slides[current].theme} transition-colors duration-700 text-white flex flex-col items-center justify-center relative font-sans`}>
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Fullscreen Toggle Button (Top Right) */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={toggleFullscreen}
          className="p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all active:scale-95 text-white/70 hover:text-white"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>

      {/* Main Slide Content */}
     <div className={`px-4 md:px-8 relative z-10 perspective-1000 flex flex-col items-center transition-all duration-500 ${
        current === 6 ? "w-[90%] max-w-none" : "w-full max-w-7xl"
      }`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="text-center w-full flex flex-col items-center"
          >
            {/* Header */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex flex-col items-center"
            >
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono tracking-widest uppercase mb-4 border border-white/5">
                Slide {current + 1} / {slides.length}
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-xl mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                {slides[current].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                {slides[current].subtitle}
              </p>
            </motion.div>

            {/* Content Container */}
            <motion.div 
              className="w-full bg-black/20 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl min-h-[450px] flex flex-col justify-center items-center relative overflow-hidden"
              initial={{ rotateX: -5, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Glossy Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              
              {slides[current].content}
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-50">
        <button 
          onClick={prevSlide} 
          disabled={current === 0}
          className="p-4 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 disabled:opacity-30 backdrop-blur-md transition-all active:scale-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          disabled={current === slides.length - 1}
          className="p-4 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 disabled:opacity-30 backdrop-blur-md transition-all active:scale-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1.5 bg-gray-800 w-full">
        <motion.div 
          className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ ease: "circOut", duration: 0.5 }}
        />
      </div>
      
      {/* Background Style for Stack Overflow Bar */}
      <style jsx global>{`
        .striped-bg {
          background-image: linear-gradient(45deg,rgba(0,0,0,.15) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.15) 50%,rgba(0,0,0,.15) 75%,transparent 75%,transparent);
          background-size: 1rem 1rem;
        }
      `}</style>
    </div>
  );
}