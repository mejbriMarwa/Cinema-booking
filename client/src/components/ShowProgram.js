import React from "react";
import AddProgram from "./AddProgram";

const ShowProgram = ({ titleMovie, dateMovie }) => {
  return (
    <div class="container">
      {/* <h1>{titleMovie}</h1>
      <h1>{dateMovie}</h1> */}
      <div class="calendar-container">
        <header>
          <div class="day">24</div>
          <div class="month">February</div>
        </header>

        <table class="calendar">
          <thead>
            <tr>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="prev-month">29</td>
              <td class="prev-month">30</td>
              <td class="prev-month">31</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>

            <tr>
              <td>
                5<h1 className="TitleMovie">Love Tactics</h1>
              </td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>

            <tr>
              <td>12</td>
              <td>
                13
                <h1 className="TitleMovie">
                  DOWNFALL: The Case Against Boeing
                </h1>
              </td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td class="current-day">18</td>
            </tr>

            <tr>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>
                23<h1 className="TitleMovie">Forgive Us Our Trespasses</h1>
              </td>
              <td>24</td>
              <td>25</td>
            </tr>

            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              {/* <td>29</td>
            <td>30</td>
            <td>31</td> */}
              <td class="next-month">1</td>
            </tr>
          </tbody>
        </table>

        <div class="ring-left"></div>
        <div class="ring-right"></div>
      </div>
      <br />
      <AddProgram />
    </div>
  );
};

export default ShowProgram;
