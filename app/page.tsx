import Main from '@/src/components/main';

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-between font-[family-name:var(--font-geist-med)] bg-[#eef5ff] ">
      <main className="flex flex-col items-center justify-center my-auto max-w-[900px] w-full h-full overflow-auto ">
        <Main />
      </main>
      <footer className="  text-gray font-light">
        Challenge by{' '}
        <a
          className=" text-navy-blue font-[family-name:var(--font-geist-bold)]"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          className="text-navy-blue font-[family-name:var(--font-geist-bold)]"
          href="#"
        >
          Rodiat Morin
        </a>
        .
      </footer>
    </div>
  );
}
