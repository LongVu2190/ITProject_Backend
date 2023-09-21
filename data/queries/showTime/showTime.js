import utils from '../../utils.js';
import config from '../../../config.js';
import sql from 'mssql';

const addShowTime = async (data) => {
    try {
        let pool = await sql.connect(config.sql);

        const sqlQueries = await utils.loadSqlQueries('showTime');

        const insertEvent = await pool.request()
                            .input('ShowTime_ID', sql.NVarChar, data.ShowTime_ID)
                            .input('Movie_ID', sql.NVarChar, data.Movie_ID)
                            .input('Date', sql.Date, data.Date)
                            .input('Start_Time', sql.NVarChar, data.Start_Time)
                            .input('End_Time', sql.NVarChar, data.End_Time)
                            .input('Run_Time', sql.NVarChar, utils.timeDifference(data.Start_Time, data.End_Time))
                            .query(sqlQueries.addShowTime);   
       
        return insertEvent.recordset;
    } catch (error) {
        return error;
    }
}

export default {
    addShowTime
}