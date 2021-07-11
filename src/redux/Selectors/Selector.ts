import {IGlobalState} from "../state";

interface IRootState extends IGlobalState {}

const selectCurrencies = (state: IRootState) => {return state.currency.currencies};
const selectCurrentCurrency = (state: IRootState) => {return state.currency.currentCurrency};
const selectIsBuying = (state: IRootState) => {return state.currency.isBuying};
const selectAmountOfBYN = (state: IRootState) => {return state.currency.amountOfBYN};
const selectAmountOfCurrency = (state: IRootState) => {return state.currency.amountOfCurrency};
