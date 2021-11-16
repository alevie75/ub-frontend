import React from "react";
import {Link, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, CardBody, CardTitle, CardText} from "reactstrap";

class Jobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            jobs: [],
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
                        jobs: result.jobs
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
        const { error, isLoaded, jobs } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Container>
                    <h2 className="centered">Jobs</h2>
                    <Row xs={1} sm={2} lg={3}>
                        {jobs.map(job =>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{job.customerID}</CardTitle>
                                        <CardText>Location: {job["location"]}</CardText>
                                        <CardText>Price: {job.price}</CardText>
                                        <CardText>Status: {job['status']}</CardText>
                                    </CardBody>
                                    <CardBody>

                                    </CardBody>
                                </Card>
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