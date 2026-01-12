export function Footer() {
    return (
        <footer className="text-gray-600 p-6 lg:-mt-10 lg:p-0 text-center">
            <p className="text-sm sm:text-md">
                <span aria-label="Copyright">&copy;</span> {new Date().getFullYear()} Loïc DELPRAT. Tous droits réservés.
            </p>
        </footer>
    );
}