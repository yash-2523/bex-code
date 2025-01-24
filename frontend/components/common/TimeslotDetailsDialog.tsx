import { ITimezone } from "@/types/timezone"
import { ITimeslot } from "@/types/timeslot";
import { TimeConverter } from "@/utils/converter";
import { Dialog } from "@headlessui/react";

interface TimeslotDetailsDialogProps {
    timezone: ITimezone;
    timeslot: ITimeslot;
    isOpen: boolean;
    onClose: () => void;
}

const TimeslotDetailsDialog: React.FC<TimeslotDetailsDialogProps> = ({
    timeslot,
    timezone,
    isOpen,
    onClose
}) => {
    return (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="flex items-center justify-between mb-6">
                            <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900">
                                Time Slot Details
                            </Dialog.Title>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h4 className="text-sm font-medium text-gray-500 mb-1">
                                    Original Time (UTC)
                                </h4>
                                <p className="text-lg font-semibold text-gray-900">
                                    {timeslot.time.toString()}
                                </p>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-4">
                                <h4 className="text-sm font-medium text-gray-500 mb-1">
                                    Your Local Time
                                </h4>
                                <p className="text-lg font-semibold text-gray-900">
                                    {TimeConverter(timeslot, timezone)}
                                </p>
                                <p className="mt-2 text-sm text-blue-600">
                                    {timezone.name} (UTC {timezone.offset >= 0 ? '+' : ''}{timezone.offset})
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default TimeslotDetailsDialog;