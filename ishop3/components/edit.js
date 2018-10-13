import React from 'react';
import PropTypes from 'prop-types';

import './edit.css';
class Edit extends React.Component{

   static propTypes = {
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
                code:PropTypes.number.isRequired,
                id: PropTypes.number,
                cbcancel: PropTypes.func,
                cbsaveEdit: PropTypes.func,
    };

    cancelEdit = () => {
        this.props.cbcancel();
    };

    saveEdit =() =>{
        this.props.cbsaveEdit(
            document.getElementsByName("name")[0]['value'],
            document.getElementsByName("price")[0]['value'],
            document.getElementsByName("url")[0]['value'],
            document.getElementsByName("count")[0]['value'],
            this.props.id
        );
    };


    render () {
      //  console.log(this.props.name);
        return (
          <div className="container" key={this.props.code}>
            <div className="row">Редактирование элемента</div>
              <div className="row d-flex flex-column inputs">
                  <label htmlFor="">Название
                      <input type="text" name="name" defaultValue={this.props.name}/>
                  </label>
                  {
                      this.props.errors.name&&
                      <div className="alert alert-danger">
                          {this.props.errors.name}
                      </div>
                  }
                  <label htmlFor="">Цена
                      <input type="text" name="price" defaultValue={this.props.price}/>
                  </label>
                  {
                      this.props.errors.price&&
                      <div className="alert alert-danger">
                          {this.props.errors.price}
                      </div>
                  }
                  <label htmlFor="">Картинка
                      <input type="text" name="url" defaultValue={this.props.url}/>
                  </label>
                  {
                      this.props.errors.url&&
                      <div className="alert alert-danger">
                          {this.props.errors.url}
                      </div>
                  }
                  <label htmlFor="">Количество
                      <input type="text" name="count" defaultValue={this.props.count}/>
                  </label>
                  {
                      this.props.errors.count&&
                      <div className="alert alert-danger">
                          {this.props.errors.count}
                      </div>
                  }
              </div>
              <div className="row">
                  <div className="btn btn-success" onClick={this.saveEdit}>Сохранить</div>
                  <div className="btn btn-danger" onClick={this.cancelEdit}>Отмена</div>
              </div>
          </div>
        );
    }
}

export default Edit;