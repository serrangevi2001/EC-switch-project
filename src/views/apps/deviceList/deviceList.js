import React,{ useEffect, useState } from 'react'
import { Badge, Card, CardBody, CardFooter, Label, Table } from 'reactstrap'
import { connect } from 'react-redux'
import { getDeviceList } from '../../auth/redux/actions/login.actions'
import { getPage } from '../../auth/helper/common'
import VWPagination from '../../auth/Pagination/VWPagination'
    


const mapStateToProps = (state) => ({
    deviceList: state.loginReducer.deviceList,
    totalItemsDeviceList: state.loginReducer.totalCountDeviceList
})

const mapDispatchToProps = (dispatch) => ({
    getDeviceList: (page, pageSize) => dispatch(getDeviceList(page, pageSize))

})

const deviceList = (props) => {
    //eslint-disable-next-line
    const [pageSize] = useState(1)
        //eslint-disable-next-line
    const [pager, setPager] = useState({ currentPage: 1 })

    console.log('userListValuedevicelist', props.deviceList)
    console.log('totalItemsDevicelist:', props.totalItemsDeviceList)


           //eslint-disable-next-line
        useEffect(() => {
            const currentPageNumber = pager && pager.currentPage
            console.log('currenPageNumber:', currentPageNumber);
            //eslint-disable-next-line
            setPage(currentPageNumber)
        }, [])

    //eslint-disable-next-line
        const setPage = (page = 1) => {  
            console.log('page_DeviceList:', page)
            //eslint-disable-next-line
            props.getDeviceList(page, pageSize);    // prop.getdevicelist function call here // pagination devicelist API Call
            console.log('page_DeviceList:', page)
            //eslint-disable-next-line
            console.log('pageSize_DeviceList:', pageSize)
        }
        //eslint-disable-next-line
        useEffect(() => {
            const currentPager = getPage(props.totalItemsDeviceList, 1, pageSize);
            console.log("currentPagerdevicelist:", currentPager);
            setPager(currentPager)
        }, [props.totalItemsDeviceList])


    return (
        <>
            <Card>
                <CardBody>
                    <Label><b>Devices</b></Label>

                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Table className='table table-striped table-hover w-100'>
                        <thead>
                            <tr>
                            <th>Serial #</th>
                    <th>Name</th>
                    <th>H/W Ver</th>
                    <th>F/W Ver</th>
                    <th>Assign Status</th>
                    <th>Assigned User DisplayName</th>
                    <th>Assigned User Email</th>
                    <th>Status</th>
                    <th style={{ textAlign: "center" }}>Enabled</th>

                            </tr>

                        </thead>
                        <tbody>
                            {props.deviceList && props.deviceList.map((data) => (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.hardwareVersion}</td>
                                    <td>{data.firmwareVersion}</td>
                                    <td>{data.isAssigned?(<p > true</p>):(<p>false</p>)}</td>
                                    <td>{data.assignedUserDisplayName}</td>
                                    <td>{data.assignedUserEmail}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(deviceList);