import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { CurrencyState, CurrencyType } from '../../redux/currencyReducer';
import { Dispatch } from 'redux';
import {
    ChangeCurrencyFieldAC,
    ChangeOperationActionAC,
    ChangeCurrentCurrencyAC,
    CurrencyReducersTypes,
} from '../../redux/actions';
import { connect, ConnectedProps } from 'react-redux';

const CurrencyEContainer: React.FC<TProps> = props => {

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
        ChangeCurrencyFieldAC,
        ChangeOperationActionAC,
        ChangeCurrentCurrencyAC,
    } = props;

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
                    ChangeCurrencyFieldAC(value, value);
                } else {
                    ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                }
            } else {
                if (value === '') {
                    ChangeCurrencyFieldAC(value, value);
                } else {
                    ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? ChangeOperationActionAC(true) : ChangeOperationActionAC(false);
    };
    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency);
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

const mapStateToProps = ( { currency } : {currency: CurrencyState} ): CurrencyState => {
    return {
        currencies: currency.currencies,
        currentCurrency: currency.currentCurrency,
        isBuying: currency.isBuying,
        amountOfBYN: currency.amountOfBYN,
        amountOfCurrency: currency.amountOfCurrency,
    };
};

// @ts-ignore
// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) : any => {
//     return {
//         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//         },
//         setAction(isBuying: boolean) {
//             dispatch(ChangeOperationActionAC(isBuying));
//         },
//         changeCurrency(currency: string) {
//             dispatch(ChangeCurrentCurrencyAC(currency));
//         },
//     };
// };

// @ts-ignore
const connector = connect(mapStateToProps, {ChangeCurrencyFieldAC, ChangeOperationActionAC, ChangeCurrentCurrencyAC});

type TProps = ConnectedProps<typeof connector>;

export default connector(CurrencyEContainer);

