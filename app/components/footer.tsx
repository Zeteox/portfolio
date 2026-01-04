export function Footer() {
    return (
        <footer className="text-gray-600 p-6 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Loïc DELPRAT. Tous droits réservés.
            </p>
        </footer>
    );
}