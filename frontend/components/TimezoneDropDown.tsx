import { getTimezones } from "@/services/timezone.service"
import { ITimezone } from "@/types/timezone"
import { useQuery } from "@tanstack/react-query"
import { memo, useCallback, useMemo } from "react"
import Select from "react-tailwindcss-select"

interface TimezoneDropDownProps {
    setTimezone: (value: ITimezone | null) => void;
    timezone: ITimezone | null;
}

const TimezoneDropDown: React.FC<TimezoneDropDownProps> = memo(({ setTimezone, timezone }) => {
    const timezonesData = useQuery({
        queryKey: ['timezones'],
        queryFn: async () => {
            let resp = await getTimezones();
            return ((resp.data || []) as ITimezone[]);
        },
    })

    const options = useMemo(() =>
        timezonesData.data?.map((t) => ({
            value: t._id.toString(),
            label: `${t.name} (${t.abbreviation})`
        })) || [],
        [timezonesData.data]
    );

    const selectedValue = timezone ? {
        value: timezone._id.toString(),
        label: timezone.name
    } : null

    const handleChange = useCallback((option: any) => {
        if (option) {
            const selectedTimezone = timezonesData.data?.find(
                t => t._id.toString() === option.value
            ) || null;
            setTimezone(selectedTimezone);
        } else {
            setTimezone(null);
        }
    }, [timezonesData.data, setTimezone]);

    return (
        <Select
            placeholder="Select Timezone"
            primaryColor="blue"
            loading={timezonesData.isLoading || timezonesData.isFetching}
            options={options}
            value={selectedValue}
            onChange={handleChange}
        />
    )
})

TimezoneDropDown.displayName = "TimezoneDropDown"

export default TimezoneDropDown