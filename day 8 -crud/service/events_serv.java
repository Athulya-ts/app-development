package com.iamneo.security.service;


import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.events;
import com.iamneo.security.repository.events_repo;
@Service
public class events_serv
{
	@Autowired
	events_repo repo;
	
	public events saveDetails(events e)
	{
		return repo.save(e);
	}
	
	public List<events> getDetails()
	{
		return repo.findAll();
	}
	public List<events> getSorted(String field) {
		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	public List<events> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<events> page =repo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	public events updateDetails(events e1)
	{
		return repo.saveAndFlush(e1);
	}
	public void deleteDetails(Long id) 
	{
		repo.deleteById(id);
	}
    public Stream<Order> getEmployeeById(Long id)
    {
        return repo.findById(id).get();
    }
	
}