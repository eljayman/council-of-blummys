import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background image */}
      <Image
        src="/Council-of-Blummys.jpg"
        alt="Council of Blummys Background"
        fill
        priority
        className="object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center gap-8 font-[Luminari,Papyrus,Copperplate,fantasy]">
        {/* Title */}
        <h1 className="text-6xl font-bold text-gray-700 tracking-wide">
          Council of Blummy&apos;s
        </h1>

        {/* Content Card */}
        <div className="bg-white/95 rounded-lg shadow-lg p-8 w-full max-w-[800px] border-3 border-gray-800/70">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center tracking-wide">
            Current gameplay rules:
          </h2>

          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-xl">
            <li>All cards currently on the <a href="https://magic.wizards.com/en/banned-restricted-list" className="text-blue-600 hover:text-blue-800 underline">WOTC banned list</a> are banned.</li>
            <li>All cards that grant extra turns are banned.</li>
            <li>All non-creature artifacts that create more mana than their mana cost and enter untapped and don&apos;t require additional costs to acvtivate are banned.</li>
            <li>All mass land removal cards are banned. This includes destroying all lands, returning all lands to owner&apos;s hand, destroying all lands of a type, etc.</li>
            <li>All cards that search for anything except basic lands are banned.</li>
            <li>All permanent cards that allow additional lands to be played are banned.</li>
            <li>Addition bans:
              <ul className="list-disc list-inside">
                <li>Rhystic Study</li>
                <li>Mystic Remora</li>
                <li>Smothering Tithe</li>
                <li>Tergrid, God of Fright</li>
                <li>Jin-Gitaxias, Core Augur</li>
                <li>Cyclonic Rift</li>
                <li>Ulamog, the Infinite Gyre</li>
                <li>Kozilek, Butcher of Truth</li>
                <li>Bruvac the Grandiloquent</li>
              </ul>
            </li>
          </ol>
          <div className="mt-8 text-center text-2xl text-gray-700 italic">
            In order to promote maximum con queso!
          </div>
        </div>
        <div className="bg-white/95 rounded-lg shadow-lg p-8 w-full max-w-[800px] border-3 border-gray-800/70">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center tracking-wide">
            Considerations:
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-xl">
            <li>Equipment that costs 0 to equip.</li>
            <li>Cards that interact with cards in the exile zone.</li>
            <li>Gaea&apos;s Cradle</li>
            <li>Ancient Tomb</li>
            <li>Urza, Lord High Artificer</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
