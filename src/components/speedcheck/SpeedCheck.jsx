import React, { Component } from 'react';

class SpeedCheck extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="card text-center border border-info">
                    <div className="card-header">
                        <h3>Yazma Hızı Testi</h3>
                    </div>
                    <div className="card-body">
                        <p>Alttaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır.</p>
                        <p>Testi bitirmek için 'ctrl + Enter' kombinasyonunu kullanınız.</p>
                        <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
                    </div>
                    <div className="card-footer">
                        Hello React
                </div>
                </div>
                <hr />
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Metni giriniz" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="reset">sıfırla</button>
                    </div>
                </div>
                <hr />
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            Süre:
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            Doğruluk:
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            DBK:
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SpeedCheck;