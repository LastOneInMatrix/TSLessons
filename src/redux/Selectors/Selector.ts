import {IGlobalState} from "../state";

interface IRootState extends IGlobalState {}

export const selectCurrencies = (state: IRootState) => {return state.currency.currencies};
export const selectCurrentCurrency = (state: IRootState) => {return state.currency.currentCurrency};
export const selectIsBuying = (state: IRootState) => {return state.currency.isBuying};
export const selectAmountOfBYN = (state: IRootState) => {return state.currency.amountOfBYN};
export const selectAmountOfCurrency = (state: IRootState) => {return state.currency.amountOfCurrency};

export const commonSelector = (state: IRootState) => state.currency;