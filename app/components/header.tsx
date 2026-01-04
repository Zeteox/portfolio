export function Header() {
  return (
    <header className="flex gap-4 p-4 justify-center md:justify-end lg:justify-end text-lg sm:text-1xl md:text-2xl lg:text-3xl">
      <a href="#about" className={`border-2 rounded-full pl-2 pr-2 border-background hover:border-foreground`}>A Propos</a>
      <a href="#projects" className={`border-2 rounded-full pl-2 pr-2 border-background hover:border-foreground`}>Projets</a>
      <a href="#contact" className={`border-2 rounded-full pl-2 pr-2 border-background hover:border-foreground`}>Contact</a>
    </header>
  );
}