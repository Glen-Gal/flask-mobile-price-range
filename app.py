from flask import Flask, render_template, request
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

model = pickle.load(open('mobilesvm_model.pkl', 'rb'))

cols = ['battery_power', 'blue', 'clock_speed', 'dual_sim', 'fc', 'four_g', 'int_memory', 'm_dep', 'mobile_wt', 'n_cores', 'pc', 'px_height', 'px_width', 'ram', 'sc_h', 'sc_w', 'talk_time', 'three_g', 'touch_screen', 'wifi']

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        print('Received form: {}'.format(request.form))
        battery_power = int(request.form['battery_power'])
        print('Received battery power: {}'.format(battery_power))
        blue = int(request.form['blue'])
        print('Received bluetooth: {}'.format(blue))
        clock_speed = float(request.form['clock_speed'])
        print('Received clock speed: {}'.format(clock_speed))
        dual_sim = int(request.form['dual_sim'])
        fc = int(request.form['fc'])
        four_g = int(request.form['four_g'])
        int_memory = int(request.form['int_memory'])
        m_dep = float(request.form['m_dep'])
        mobile_wt = int(request.form['mobile_wt'])
        n_cores = int(request.form['n_cores'])
        pc = int(request.form['pc'])
        px_height = int(request.form['px_height'])
        px_width = int(request.form['px_width'])
        ram = int(request.form['ram'])
        sc_h = int(request.form['sc_h'])
        sc_w = int(request.form['sc_w'])
        talk_time = int(request.form['talk_time'])
        three_g = int(request.form['three_g'])
        touch_screen = int(request.form['touch_screen'])
        wifi = int(request.form['wifi'])

        x_sample = [[battery_power, blue, clock_speed, dual_sim, fc, four_g, int_memory, m_dep, mobile_wt, n_cores, pc, px_height, px_width, ram, sc_h, sc_w, talk_time, three_g, touch_screen, wifi]]
        X = pd.DataFrame(x_sample, columns=cols)
        result = model.predict(X)

        return render_template('result.html', value=result)

@app.route('/')
def home():
    return render_template('Home.html')

@app.route('/aboutus')
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)
