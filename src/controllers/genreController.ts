import { NextApiRequest, NextApiResponse } from 'next'
import { Genre } from '@/models'

// Get all genre
export const getAllGenres = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const {
      page = 1,
      perPage = 10,
      title = '',
      description = '',
    } = req.query || {}
    const filters = {
      ...(title ? { title: { $regex: title } } : {}),
      ...(description ? { description: { $regex: description } } : {}),
    }
    const genre = await Genre.find(filters)
      .skip((+page - 1) * +perPage)
      .limit(+perPage)
    const totalCount = await Genre.countDocuments(filters)
    res.status(200).json({
      success: true,
      data: genre,
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

// Create a new genre
export const createGenre = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const genre = await Genre.create(req.body)
    res.status(201).json({ success: true, data: genre.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Get a single genre by ID
export const getGenreById = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const genre = await Genre.findById(req.query.id)
    res.status(200).json({ success: true, data: genre.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Update a genre
export const updateGenre = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const genre = await Genre.findByIdAndUpdate(
      req.query.id,
      { ...req.body, updatedAt: new Date() },
      {
        new: true,
        runValidators: true,
      },
    )
    if (!genre) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: genre.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Delete a genre
export const deleteGenre = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const deletedGenre = await Genre.findByIdAndRemove(req.query.id)
    if (!deletedGenre) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: {} })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}
