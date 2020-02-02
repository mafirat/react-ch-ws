import React, { useState } from 'react';
const initState = {
    text: '',
    difficulty: ''
}
const AddChallenge = () => {
    const [challenge, setChallenge] = useState(initState);

    const changeHandler = (e) => {
        setChallenge({
            ...challenge,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                Metin Ekle
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="text">Metin:</label>
                        <input type="text" name="text" className="form-control" onChange={changeHandler} value={challenge.text} autoComplete="off" placeholder="Metni giriniz" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="difficulty">Zorluk: </label>
                        <select name="difficulty" id="difficulty" className="form-control" onChange={changeHandler} required value={challenge.difficulty}>
                            <option value="">Seçiniz</option>
                            <option value="easy">Kolay</option>
                            <option value="medium">Normal</option>
                            <option value="hard">Zor</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-success">Kaydet</button>
                </form>
            </div>
        </div>
    );
}

export default AddChallenge;