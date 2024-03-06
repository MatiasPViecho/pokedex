import Cards from '@/sections/Cards';

export default function Home() {
  return (
    <main className="mt-2 relative h-screen">
      <ul className="flex flex-col gap-2 px-2 py-2 absolute h-screen">
        <li>
          <h1>Pokedex</h1>
        </li>
        <li>
          <a
            href="https://github.com/MatiasPViecho/pokedex"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>Regions</li>
      </ul>
      <Cards />
    </main>
  );
}
