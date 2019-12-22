import React, { Component } from 'react';
import Post from './Post'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
    width: "80%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
    },
    table: {
    minWidth: 600
    }
});



class Notice extends Component {
    state ={
        boards: [
            {
                'id': '1',
                'title': '최소 3일전 예약 필수 '
            },
            {
                'id': '2',
                'title': '<타사 숙소 이용 시> 예약 할 액티비티 (당일환율 적용)금액 계좌입금, 입국후 관계자 미팅'
            },
            {
                'id': '3',
                'title': '<당사 숙소 이용 시> 입국 후 액티비티 총액 현장결제 당일 취소 시 환불 불가'
            },
            {
                'id': '4',
                'title': '예약 취소 및 변경 시 반드스 2~3일 전 사전 연락 요망'
            },
            {
                'id': '5',
                'title': '기후 변화에 따른 날짜변경 및 취소 시 100% 환불'
            },
            {
                'id': '6',
                'title': '전 액티비티 픽업 및 드랍 무료'
            }
        ]

    } 

    handleCellClick(){
        alert("cell clicked")
    }

    render() {
        const {boards} = this.state;
        
        return(

            
            <div>
                <h1 align='center'>Notice</h1>
                <ul>
                    <h4 >주의사항</h4>
                    <li>최소 3일전 예약 필수 </li>
                    <li>타사 숙소 이용 시: 예약 할 액티비티 (당일환율 적용)금액 계좌입금, 입국후 관계자 미팅 </li>
                    <li>당사 숙소 이용 시: 입국 후 액티비티 총액 현장결제</li>
                    <li>당일 취소 시 환불 불가</li>
                    <li>예약 취소 및 변경 시 반드스 2~3일 전 사전 연락 요망</li>
                    <li>기후 변화에 따른 날짜변경 및 취소 시 100% 환불</li>
                    <li>전 액티비티 픽업 및 드랍 무료</li>
                </ul>
                {/* <h1 align='center'>Notice</h1>
                <Table>
                    <TableHead onCellCick={this.handleCellClick}>
                        <TableRow>
                            <TableCell>주의사항</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {boards.map(c => (
                            <TableRow>
                                <TableCell>{c.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> */}
            </div>
        );
    }
}



export default Notice;