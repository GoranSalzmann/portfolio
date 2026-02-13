import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen flex items-center justify-center flex-col pt-24">
            <h1 className="text-3xl font-bold mb-12">Über mich</h1>
            <section className="px-24 py-6 w-full">
                <h2 className="text-2xl font-semibold mb-1">Softwareentwickler:</h2>
                <p>
                    Bei der Softwareentwicklung ist es mein Anspruch, ein System zu bauen, das nicht einfach nur
                    funktioniert, sondern robust, flexibel und zukunftorientiert ist. Mir ist wichtig sicherzustellen,
                    das Features auf einem soliden Fundament aufbauen. Dafür bleibe ich immer am Ball, um neue Ansätze
                    zu erlernen und die Trends der Branche im Auge zu behalten. Ich verbinde meine Expertise in 
                    verschiedenen Teilgebieten der Informatik um eine sauber integrierte Lösung für die vor mir 
                    liegenden Probleme zu finden.
                    <br />
                    Ich arbeite strukturiert und betrachte das große Ganze, kann mich allerdings auch an Details festbeißen,
                    sollte der Bedarf bestehen.
                    <br />
                    Mein Ziel ist es Software zu bauen, die dem Nutzer aus dem Weg geht und eine Umgebung zu schaffen,
                    in der sowohl Endnutzer als auch Entwickler so einfach wie möglich vorran kommen können.
                    <br />
                    Dies gilt sowohl für meine professionelle Arbeit als auch für side projects.
                    <br />
                    <Link href="/projects" className="inline-flex items-center border rounded-lg p-1.5 mt-4 w-fit mr-3 hover:scale-105 active:rotate-2 px-4">
                        Zu meinen Projekten
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="ml-2 w-6 h-6 fill-white"><path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" /></svg>
                    </Link>
                </p>
            </section>
            <section className="px-24 py-6 w-full">
                <h2 className="text-2xl font-semibold mb-1">Motorradfahrer:</h2>
                <p>
                    Der 1. April ist immer einer der besten Tage im Jahr. Die neue Motorradsaison beginnt. Als Kind fuhr
                    ich oft bei anderen mit und wusste immer schon, dass ich einmal den Führerschein machen würde.
                    Nach vielen Jahren, in denen ich weder Zeit noch Geld hatte, machte ich 2023 den A-Klasse Schein.
                    Mit meiner geliebten Kawa fahre ich häufig meine Haustrecke über den Arber. Seit letztem Jahr auch
                    mit Sozia.
                </p>
            </section>
            <section className="px-24 py-6 w-full">
                <h2 className="text-2xl font-semibold mb-1">Astrofotograf:</h2>
                <p>
                    Was als P-Seminar während der Oberstufe begannt, entwickelte sich über die Jahre in ein richtiges
                    Hobby. Der Weltraum ist so ein unbegreifliches Konzept, dass es fast surreal erscheint, wie viel
                    eine einfache Kamera doch einfangen kann. Viele Nächte verbringe ich mit Stativ und DSLR draußen 
                    auf einer weiten Wiese, um am nächsten Tag aufgeregt am PC die Ergebnisse zu betrachten. Mein 
                    Lieblingsmotiv ist der Orion Nebel, da er selbst mit dem bloßen Auge erkennbar ist. Ein so tolles
                    Motiv, das auf das untrainierte Auge nur wie ein weiterer Stern aussieht. Für die nächsten Jahre 
                    habe ich mir vorgenommen, auf ein Teleskop mit Star-Tracker aufzurüsten und so noch viele weitere
                    Beobachtungsziele in meinen Katalog aufzunehmen.
                </p>
            </section>
        </main>
    );
}
