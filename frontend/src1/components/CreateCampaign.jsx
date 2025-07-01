import { PinataSDK } from 'pinata'

export default function CreateCampaign() {

    const pinata = new PinataSDK()

    function handleSubmit() {

    }




  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Campaign</h1>
      <form className="space-y-4">
        <div className="flex items-center gap-4">
          <label htmlFor="title" className="w-24 text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="______"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <label htmlFor="description" className="w-24 text-sm font-medium text-gray-700">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="______"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <label htmlFor="goal" className="w-24 text-sm font-medium text-gray-700">
            Funding Goal:
          </label>
          <input
            type="number"
            id="goal"
            name="goal"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="______"
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Create Campaign
          </button>
        </div>
      </form>
    </div>
  );
}