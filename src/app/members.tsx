export default function Members() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-5xl font-bold flex-col mb-12">Mitglieder</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                <div className="max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <img src="/ana.jpg" alt="Member 1" className="w-36 h-36 rounded-full mx-auto mb-4 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Ana</h3>
                        <p className="text-gray-500">1. Geige</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="/bella.jpg" alt="Member 2" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Bella</h3>
                        <p className="text-gray-500">2. Geige</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="/tin.jpg" alt="Member 3" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Tin</h3>
                        <p className="text-gray-500">Bratsche</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="/valentin.jpg" alt="Member 4" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Valentin</h3>
                        <p className="text-gray-500">Violoncello</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
