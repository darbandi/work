import { NextApiRequest, NextApiResponse } from 'next'
import { Movie } from '@/models'

// Get all movies
export const getAllMovies = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const {
      page = 1,
      perPage = 10,
      userName = '',
      email = '',
    } = req.query || {}
    const filters = {
      ...(userName ? { userName: { $regex: userName } } : {}),
      ...(email ? { email: { $regex: email } } : {}),
    }
    const movies = await Movie.find(filters)
      .skip((+page - 1) * +perPage)
      .limit(+perPage)
    const totalCount = await Movie.countDocuments(filters)
    res.status(200).json({
      success: true,
      data: movies,
      meta: {
        totalCount,
        page,
        perPage,
      },
    })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Create a new movie
export const createMovie = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json({ success: true, data: movie.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Get a single movie by ID
export const getMovieById = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const movie = await Movie.findById(req.query.id)
    res.status(200).json({ success: true, data: movie.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Update a movie
export const updateMovie = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.query.id,
      { ...req.body, updatedAt: new Date() },
      {
        new: true,
        runValidators: true,
      },
    )
    if (!movie) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: movie.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Delete a movie
export const deleteMovie = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const deletedMovie = await Movie.findByIdAndRemove(req.query.id)
    if (!deletedMovie) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: {} })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}
