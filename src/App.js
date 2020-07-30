import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: [
        {
          id: 1,
          task: "test"
        }
      ],
      noteInputValue : ''
    }
  }

  render(){
    return(
      <div class="sections">
        <h1><span>Scrum Board</span></h1>
          <div class="row">
              <div class="first col-xs-12 col-ms-6 col-lg-4">
                  <h3><span>Not Started</span></h3>
                  <div class="notes">
                    {
                      this.state.notes.map((note)=>{
                        return(
                          <div class="note">
                            <div class="note-body">
                                <i class="far fa-times-circle note-remove"></i>
                                <div class="note-text">
                                    Get milk
                                </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
              </div>

              <div class="second col-xs-12 col-ms-6 col-lg-4">
                <h3><span>In Progress</span></h3>
              </div>

              <div class="third col-xs-12 col-ms-6 col-lg-4">
                <h3><span>Done</span></h3>
              </div>
          </div>
          <div class="update">
            <h2><span>Update</span></h2>
            <form>
              <div class="form-row text">
                <div class="task col-lg-12">
                  <label for="validationDefault01">Task</label>
                  <input type="text" class="form-control" id="validationDefault01" required/>
                </div>
                <div class="status col-lg-12">
                  <label for="validationDefault02">Status</label>
                  <input type="text" class="form-control" id="validationDefault02" required/>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Update</button>
            </form>
          </div>
      </div>
    )
  }
}

export default App;
