import React, {Dispatch} from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
import {
    ChangeCurrencyFieldAC,
    ChangeOperationActionAC,
    ChangeCurrentCurrencyAC, CurrencyReducersTypes,
} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {
    commonSelector,
} from "../../redux/Selectors/Selector";

const CurrencyEContainer: React.FC = props => {


    // const currencies = useSelector(selectCurrencies)
    // const currentCurrency = useSelector(selectCurrentCurrency)
    // const isBuying = useSelector(selectIsBuying)
    // const amountOfBYN = useSelector(selectAmountOfBYN)
    // const amountOfCurrency = useSelector(selectAmountOfCurrency)

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
    } = useSelector(commonSelector);

    const dispatch = useDispatch<Dispatch<CurrencyReducersTypes>>(); //если не типизировать, то в dispatch можно будет передовать экшены которых у нас нет, т.е. любого типа

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate; //установка курса покупки продажи
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return; // проверка на число
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeOperationActionAC(true)) : dispatch(ChangeOperationActionAC(false));
    };
    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};




// type TProps = ConnectedProps<typeof connector>;

export default CurrencyEContainer;

