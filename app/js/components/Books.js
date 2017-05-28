import React from "react";
import Book from "./Book";

export default class Books extends React.Component {

    render() {
        const books = [1, 2, 3, 4, 5];
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        books.map(() => {
                            return (<Book/>);
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
