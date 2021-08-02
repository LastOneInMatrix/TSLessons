import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<any[]>([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<any[]>([]);

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(response => {
                if (response.data.hasOwnProperty('Error')) {

                    return Promise.reject(response.data.Error);
                } else {
                    console.log(response.data.Search)
                    setSerachResult(response.data.Search)
                }

            })
            .catch(err => {
                setSerachResult([err]);
                console.warn(err)
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(res => {
                setSerachResultByType(res.data.Search.map((el: any) => <pre>{el.Title + '----'}</pre>))
            })
            .catch(err => console.log(err))
    }

    const searchResultJSX = serachResult.map((el, i) => <div key={i}>
        <li>{el.Title ? el.Title : el}</li>
        {el.Poster && <img style={{width: '100px'}} src={el.Poster} alt={'there is no movie photo'}/>}
    </div>)
    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    <ol>
                        {searchResultJSX}
                    </ol>
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;