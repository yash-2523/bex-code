import { memo } from 'react';

interface ListProps {
    items: any[];
    selectedItem: any | null;
    onItemSelect: (item: any) => void;
    renderItem: (item: any) => string;
    getKey: (item: any) => string;
    className?: string;
}

const ListComponent: React.FC<ListProps> = memo(({ 
    items, 
    selectedItem, 
    onItemSelect,
    renderItem,
    getKey,
    className = ''
}) => {
    return (
        <div className={`divide-y divide-gray-100 ${className}`}>
            {items.map((item) => (
                <label 
                    key={getKey(item)}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                >
                    <input
                        type="radio"
                        name="list-selection"
                        checked={selectedItem ? getKey(selectedItem) === getKey(item) : false}
                        onChange={() => onItemSelect(item)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="flex-1 text-sm text-gray-900">
                        {renderItem(item)}
                    </span>
                </label>
            ))}
        </div>
    );
})

export default ListComponent;