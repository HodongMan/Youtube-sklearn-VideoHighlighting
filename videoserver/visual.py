# -*- coding: utf-8 -*-
"""
Demo of unicode support in text and labels.
"""
from __future__ import unicode_literals


from IPython.display import display
import numpy as np
from scipy import sparse
import matplotlib.pyplot as plt
import pandas as pd
import mglearn
import random
import time

if __name__ == "__main__":


    sample1 = [random.randint(30, 300) + random.random() for _ in range(500)]
    sample2 = [random.randint(400, 600) + random.random() for _ in range(500)]
    sample3 = [random.randint(800, 1000) + random.random() for _ in range(500)]
    sample4 = [random.randint(1200, 1300) + random.random() for _ in range(500)]
    sample5 = [random.randint(1500, 1600) + random.random() for _ in range(500)]
    sample6 = [random.randint(0, 1600) + random.random() for _ in range(3000)]

    y_data = sample1 + sample2 + sample3 + sample4 + sample5

    """
    x_data = [i for i, _ in enumerate(y_data)]

    start = time.time()
    hist, bin_edges = np.histogram(y_data)

    print(hist)
    print(bin_edges)
    end = time.time() - start
    print(end)


    plt.hist(y_data)

    plt.title("Gaussian Histogram")
    plt.xlabel("Value")
    plt.ylabel("Frequency")

    plt.show()
    """

  # deterministic random data
    start = time.time()
    a = np.hstack(y_data)
    hist, bin_edges = np.histogram(y_data)
    print(hist)
    print(sum(hist) / len(hist))
    print(bin_edges)
    end = time.time() - start
    print(end)
    plt.hist(a)  # arguments are passed to np.histogram
    plt.title("TEST DATA histogram")
    plt.show()
