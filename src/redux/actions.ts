export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_OPERATION_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
} //тип объекта констант


export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE;
    payload: {
        amountOfBYN: string;
        amountOfCurrency: string
    }
};


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
  return{
      type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
      payload: {
          amountOfBYN: amountOfBYN,
          amountOfCurrency: amountOfCurrency,
      }
  }
};

export type ChangeOperationAction = {
    type: ACTIONS_TYPE.CHANGE_OPERATION_ACTION;
    payload: {
        isBuying: boolean;
    }
};


export const ChangeOperationActionAC = (isBuying: boolean): ChangeOperationAction => {
    return {
        type: ACTIONS_TYPE.CHANGE_OPERATION_ACTION,
        payload: {isBuying}
    }
};

export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    payload: {currentCurrency: string}
};


export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType =>  {
   return {
       type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
       payload: {currentCurrency}
   }

};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeOperationAction | ChangeCurrentCurrencyType;