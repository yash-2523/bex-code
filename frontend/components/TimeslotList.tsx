import { useQuery } from "@tanstack/react-query";
import { memo, useCallback, useMemo } from "react";
import List from "./common/List";
import { getTimeslots } from "@/services/timeslot.service";
import { ITimeslot } from "@/types/timeslot";
import { TimeConverter } from "@/utils/converter";
import { ITimezone } from "@/types/timezone";

interface TimeslotListProps {
    timeslot: ITimeslot | null;
    setTimeslot: (timeslot: ITimeslot | null) => void;
    timezone: ITimezone | null;
}

const TimeslotList: React.FC<TimeslotListProps> = memo(({ timeslot, setTimeslot, timezone }) => {
    console.log('TimeslotList rendered', {
        timeslotId: timeslot?._id,
        timezoneId: timezone?._id
    });

    const { data: timeslots, isLoading, isError, refetch } = useQuery({
        queryKey: ['timeslots'],
        queryFn: async () => {
            const response = await getTimeslots();
            return response.data || [];
        },
        staleTime: 5 * 60 * 1000,
    });

    const renderItem = useCallback((item: ITimeslot) => 
        TimeConverter(item, timezone),
        [timezone]
    );

    const getKey = useCallback((item: ITimeslot) => 
        item._id,
        []
    );

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center p-8 space-y-3">
                <p className="text-red-500 text-sm">Failed to load timeslots</p>
                <button 
                    onClick={() => refetch()}
                    className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!timeslots?.length) {
        return (
            <div className="flex flex-col items-center justify-center p-8 space-y-2">
                <p className="text-gray-500 text-sm">No timeslots available</p>
            </div>
        );
    }

    return (
        <List
            items={timeslots}
            selectedItem={timeslot}
            onItemSelect={setTimeslot}
            renderItem={renderItem}
            getKey={getKey}
            className="max-h-[400px] overflow-y-auto"
        />
    );
});

TimeslotList.displayName = "TimeslotList";

export default TimeslotList;