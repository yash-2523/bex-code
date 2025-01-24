"use client"
import { useCallback, useState } from "react";
import TimezoneDropDown from "@/components/TimezoneDropDown";
import TimeslotList from "@/components/TimeslotList";
import { ITimezone } from "@/types/timezone";
import { ITimeslot } from "@/types/timeslot";
import TimeslotDetailsDialog from "@/components/common/TimeslotDetailsDialog";

export default function Home() {
  const [timezone, setTimezone] = useState<ITimezone | null>(null);
  const [timeslot, setTimeslot] = useState<ITimeslot | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTimezoneChange = useCallback((value: ITimezone | null) => {
    setTimezone(value);
  }, []);

  const handleTimeslotChange = useCallback((value: ITimeslot | null) => {
    setTimeslot(value);
  }, []);

  const handleShowDetails = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const handleCloseDiaog = () => {
    setIsDialogOpen(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Timezone Converter</h1>
          <p className="text-gray-600">Select your timezone and preferred time slot</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Timezone
              </label>
              <TimezoneDropDown 
                setTimezone={handleTimezoneChange} 
                timezone={timezone} 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Time Slots
              </label>
              <div className="border rounded-lg overflow-hidden">
                <TimeslotList
                  timeslot={timeslot}
                  setTimeslot={handleTimeslotChange}
                  timezone={timezone}
                />
              </div>
            </div>

            <button 
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 
                ${!timezone || !timeslot 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
                }`}
              disabled={!timezone || !timeslot}
              onClick={handleShowDetails}
            >
              View Time Details
            </button>
          </div>
        </div>
      </div>

      {timezone && timeslot && (
        <TimeslotDetailsDialog
          timezone={timezone}
          timeslot={timeslot}
          isOpen={isDialogOpen}
          onClose={handleCloseDiaog}
        />
      )}
    </div>
  );
}
