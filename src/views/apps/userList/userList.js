import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, CardBody, CardFooter, Label, Table } from 'reactstrap'
        //eslint-disable-next-line 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//eslint-disable-next-line
import { getUserList } from '../../auth/redux/actions/login.actions'
import { getPage } from '../../auth/helper/common'
import VWPagination from '../../auth/Pagination/VWPagination'

const mapStateToProps = (state) => ({
    userList: state.loginReducer.userList,
    totalItems: state.loginReducer.totalCount
})

const mapDispatchToProps = (dispatch) => ({
    //eslint-disable-next-line
    getUserList: (page, pageSize) => dispatch(getUserList(page, pageSize))
})


const userList = (props) => {
    //eslint-disable-next-line
    const [pageSize] = useState(6)
    //eslint-disable-next-line
    const [pager, setPager] = useState({ currentPage: 1 })

    //eslint-disable-next-line
    // useEffect(()=>{      //if there is without click buttom to initial start the function
    //     props.getUserList();
    // },[])
    console.log('userListValue', props.userList)
    console.log('totalItems:', props.totalItems)


    //eslint-disable-next-line
    useEffect(() => {
        const currentPageNumber = pager && pager.currentPage
        console.log('currenPageNumber:', currentPageNumber);
        //eslint-disable-next-line
        setPage(currentPageNumber)
    }, [])



    const setPage = (page = 1) => {   //above the line :25 to 28 comment the function because the we using the useeffect 
        console.log('page:', page)
        //eslint-disable-next-line
        props.getUserList(page, pageSize);    // prop.getuserlist function call here // pagination userlist API Call
        console.log('page', page)
        //eslint-disable-next-line
        console.log('pageSize', pageSize)
    }


    //eslint-disable-next-line
    useEffect(() => {
        //eslint-disable-next-line
        const currentPager = getPage(props.totalItems, 1, pageSize);
        //eslint-disable-next-line
        console.log("currentPager:", currentPager);
        //eslint-disable-next-line 
        setPager(currentPager)
        //eslint-disable-next-line
    }, [props.totalItems])     //it can use to '<<>>' will add the 1,2,3,4,5 number will the button using props.totalItems

    //eslint-disable-next-line

    return (
        <>
            <Card>
                <CardBody className="border-bottom px-4 py-3 mb-0 d-flex justify-content-between align-items-center"> 
                    <Label><b>Users</b> </Label>
                  <Link to="/apps/createuserlist"><Button >Create</Button></Link>  

                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Table className='table table-striped table-hover w-100'>
                        <thead>
                            <tr>
                                <th>DisplayName</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th style={{ textAlign: "center" }}>Enabled</th>
                            </tr>

                        </thead>

                        <tbody>
                            {props.userList && props.userList.map((data) => (
                                <tr>
                                    <td>{data.displayName}</td>
                                    <td>{data.roles[0].roleDisplayName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.isActive ? (
                                        <Badge color='success'> Active</Badge>
                                    ) : (<Badge color='danger'>Inactive</Badge>)}</td>
                                    <td>{data.isEnabled ? (
                                        <Badge color='warning'>Enabled</Badge>
                                    ) : (<Badge color='danger'>Disabled</Badge>)}</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>


                </CardBody>
                <CardFooter>
                    <VWPagination pager={pager} setPage={setPage} />
                </CardFooter>
            </Card>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(userList);