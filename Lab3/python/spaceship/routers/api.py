from fastapi import APIRouter
import numpy

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def matrix() -> dict:
    firstRows = 5
    firstColumns = 5

    secondRows = 5
    secondColumns = 5

    if firstColumns != secondRows:

        response = {
            'result': 'Error: Sizes of matrix not equal'
        }

    else:

        firstMatrix = numpy.random.rand(firstRows, firstColumns)
        secondMatrix = numpy.random.rand(secondRows, secondColumns)
        result = numpy.dot(firstMatrix, secondMatrix)

        response = {
            "matrixA": firstMatrix.tolist(),
            "matrixB": secondMatrix.tolist(),
            "product": result.tolist()
        }

    return response
