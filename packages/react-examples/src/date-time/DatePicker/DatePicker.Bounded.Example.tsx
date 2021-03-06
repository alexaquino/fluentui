import * as React from 'react';
import {
  DatePicker,
  IDatePickerStrings,
  defaultDayPickerStrings,
  addMonths,
  addYears,
  IDatePickerStyles,
} from '@uifabric/date-time';
import { useConst } from '@uifabric/react-hooks';

const datePickerStyles: Partial<IDatePickerStyles> = { root: { maxWidth: 300, marginTop: 15 } };

export const DatePickerBoundedExample: React.FunctionComponent = () => {
  const today = useConst(new Date(Date.now()));
  const minDate = useConst(addMonths(today, -1));
  const maxDate = useConst(addYears(today, 1));

  const dayPickerStrings: IDatePickerStrings = useConst(() => ({
    ...defaultDayPickerStrings,
    // eslint-disable-next-line @fluentui/max-len
    isOutOfBoundsErrorMessage: `Date must be between ${minDate.toLocaleDateString()} and ${maxDate.toLocaleDateString()}`,
  }));

  return (
    <div>
      <div>
        When date boundaries are set (via <code>minDate</code> and <code>maxDate</code> props) the DatePicker will not
        allow out-of-bounds dates to be picked or entered. In this example, the allowed dates are{' '}
        {minDate.toLocaleDateString()} to {maxDate.toLocaleDateString()}.
      </div>
      <DatePicker
        styles={datePickerStyles}
        strings={dayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        minDate={minDate}
        maxDate={maxDate}
        allowTextInput
      />
    </div>
  );
};
