import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Team.css';

function createData(name, institute) {
    return { name, institute };
}

// Tabelas com nomes e institutos
const tableData = [
    { rows: [
        createData('Victor Santos', 'Instituto de Computação'),
        createData('Gustavo Villar', 'Instituto de Computação'),
        createData('Eduarda Marques', 'Instituto de Computação'),
        createData('Cupcake', 'Instituto de Física'),
        createData('Gingerbread', 'Instituto de Matemática'),
        createData('Cupcake', 'Instituto de Física'),
        createData('Gingerbread', 'Instituto de Matemática'),
        createData('Cupcake', 'Instituto de Física'),
        createData('Gingerbread', 'Instituto de Matemática'),
    ]},
    { rows: [
        createData('Frozen yoghurt', 'Observatório do Valongo'),
        createData('Ice cream sandwich', 'Instituto de Física'),
        createData('Eclair', 'Instituto de Matemática'),
        createData('Cupcake', 'Escola Politécnica'),
        createData('Gingerbread', 356),
        createData('Gingerbread', 356),
        createData('Cupcake', 305),
        createData('Gingerbread', 356)
    ]},
    { rows: [
        createData('Victor Santos', 'Instituto de Computação'),
        createData('Gustavo Villar', 'Instituto de Computação'),
        createData('Eduarda Marques', 'Instituto de Computação'),
        createData('Cupcake', 305),
        createData('Gingerbread', 356),
        createData('Cupcake', 305),
        createData('Gingerbread', 356),
        createData('Cupcake', 305)
    ]}
];

function Team() {
    return (
        <div className='team-wrapper'>
            <div className='team-container'>
                <div className='team-title'>Nossa Equipe</div>
            </div>

            <div className='box'>
                {/* Para criar cada tabela */}
                {tableData.map((data, index) => (
                    <TableContainer key={index} component={Paper} sx={{ width: 400, borderRadius: 1, marginLeft: 5, marginRight: 5, height: 57+52.92*(data.rows.length), '@media (max-width: 430px)': { width: 350 } }}>
                        <Table sx={{ width: 400, "& .MuiTableRow-root:hover": { backgroundColor: "#f5f5f5" }, '@media (max-width: 430px)': { width: 350, height: 57+52.92*(data.rows.length) } }} aria-label={`tabela${index}`}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontFamily: 'Gravity-Bold', fontSize: 20, '@media (max-width: 430px)': { fontSize: 18 }  }}>Nome</TableCell>
                                    <TableCell align="center" sx={{ fontFamily: 'Gravity-Bold', fontSize: 20, '@media (max-width: 430px)': { fontSize: 18 }  }}>Instituto</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* Para criar cada fileira */}
                            <TableBody>
                                {data.rows.map((row, rowIndex) => (
                                    <TableRow key={rowIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: 'Gravity', fontSize: 14, '@media (max-width: 430px)': { fontSize: 12 } }}>{row.name}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: 'Gravity', fontSize: 14, '@media (max-width: 430px)': { fontSize: 12 } }}>{row.institute}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ))}
            </div>
        </div>
    );
}

export default Team;
