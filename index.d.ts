export interface PickerProps {
    placeholder?: string;
    format: string;
    onChange: (unix: string, formatted: string) => void;
    id?: string;
    preSelected?: string;
    customClass?: string;
    inputTextAlign?: string;
    containerClass?: string;
    inputComponent?: React.Component | React.FC;
    monthTitleEnable?: boolean;
    cancelOnBackgroundClick?: boolean;
    controlValue?: boolean;
}

export interface RangePickerProps {
    placeholderStart?: string;
    placeholderEnd?: string;
    format: string;
    onChangeStart: (unix: string, formatted: string) => void;
    onChangeEnd: (unix: string, formatted: string) => void;
    idStart?: string;
    idEnd?: string;
    customClassStart?: string;
    customClassEnd?: string;
    inputTextAlign?: string;
    containerClass?: string;
    preSelectedStart?: string;
    monthTitleEnable?: boolean;
    cancelOnBackgroundClick?: boolean;
    controlValue?: boolean;
    renderPointer?: boolean;
    pointer?: React.Component | React.FC;
    inputComponent?: React.Component | React.FC;
}

export class DatePicker extends React.Component<PickerProps, any> {
        props: PickerProps;
        state: any;
}
export class DateTimePicker extends React.Component<PickerProps, any> {
        props: PickerProps;
        state: any;
}
export class DateRangePicker extends React.Component<RangePickerProps, any> {
        props: RangePickerProps;
        state: any;
}
export class DateTimeRangePicker extends React.Component<RangePickerProps, any> {
        props: RangePickerProps;
        state: any;
}
