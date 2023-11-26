'use client'
import NavBar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <>
      <NavBar/>
      <section className='h-[100vh] bg-slate-400' >Hi</section>
      <section className='h-[100vh] bg-green-300'>Hi</section>
      <section>Hi</section>
    </>
  );
}
