import React from "react";
import {Link, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import Cookies from "js-cookie";

class Jobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            redirect: null
        };
    }

    componentDidMount() {
        fetch(this.props.basePath + "/jobs")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        if ( this.props.checkLogin() == null){
            return (
                <Navigate replace to="/login" />
            );
        }
        return (
            <div>
                <Container>
                    <Row xs={1} sm={2} lg={3}>
                        {Object.keys({await this.getJobs()}).map((clubName) =>
                            <Col>
                                <ClubBox key={clubName} name={clubName} details={this.state.clubs[clubName]} clubDetails={this.state.clubs} updateClubs={this.updateClubs}/>
                            </Col>
                        )}
                    </Row>
                </Container>
                <div className="UBButton">
                    <Link to="jobs/create">
                        <button>
                            Create Job
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Jobs;